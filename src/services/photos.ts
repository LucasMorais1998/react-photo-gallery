import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

import { v4 as createId } from "uuid";

import { storage } from "../libs/firebase";

import { Photo } from "../@types/Photo";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");

  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoURL = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoURL,
    });
  }

  return list;
};

export const insert = async (file: File) => {
  const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];

  if (allowedFormats.includes(file.type)) {
    const randomName = createId();

    let newFile = ref(storage, `images/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let photoURL = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoURL } as Photo;
  } else {
    return new Error(
      `Arquivo não permitido - Tipos permitidos: .jpeg, .jpg, .png`
    );
  }
};

export const deletePhoto = async (name: string) => {
  let photoRef = ref(storage, `images/${name}`);

  await deleteObject(photoRef);
};
