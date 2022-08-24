import { FormEvent, useEffect, useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiCameraOff } from "react-icons/fi";

import * as Photos from "../../services/photos";

import { Photo } from "../../@types/Photo";

import Header from "../../components/Header";
import PhotoItem from "../../components/PhotoItem";
import UploadForm from "../../components/UploadForm";

import { Container, MainContent, PhotoListGrid, ScreenWarning } from "./styles";

const Home = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setIsLoading(true);

      setPhotos(await Photos.getAll());

      setIsLoading(false);
    };

    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDate = new FormData(e.currentTarget);
    const file = formDate.get("image") as File;

    if (file && file.size > 0) {
      setIsUploading(true);

      let result = await Photos.insert(file);

      setIsUploading(false);

      if (result instanceof Error) {
        alert({ name: result.name, err: result.message });
      } else {
        let newPhotoList = [...photos];

        newPhotoList.push(result);

        setPhotos(newPhotoList);
      }
    }
  };

  return (
    <Container>
      <MainContent>
        <Header />

        <UploadForm onSubmitForm={handleFormSubmit} isUploading={isUploading} />

        {isLoading && (
          <ScreenWarning>
            <AiOutlineLoading3Quarters className="loading-icon" />
            <div>Carregando...</div>
          </ScreenWarning>
        )}

        {!isLoading && photos.length > 0 && (
          <PhotoListGrid>
            {photos.map((photo, index) => (
              <PhotoItem key={index} name={photo.name} url={photo.url} />
            ))}
          </PhotoListGrid>
        )}

        {!isLoading && photos.length === 0 && (
          <ScreenWarning>
            <FiCameraOff className="no-photos-icon" />
            <div>Não há fotos cadastradas.</div>
          </ScreenWarning>
        )}
      </MainContent>
    </Container>
  );
};

export default Home;
