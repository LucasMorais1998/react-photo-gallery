import { FormEvent } from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdAddAPhoto } from 'react-icons/md';

import { Container, LoadingContainer } from './styles';

interface IUploadFormProps {
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  isUploading: boolean;
}

const UploadForm = ({ onSubmitForm, isUploading }: IUploadFormProps) => {
  return (
    <Container method="POST" onSubmit={onSubmitForm}>
      <label id="labelInputImage" htmlFor="inputImage">
        <MdAddAPhoto className="add-image-icon" />
        <input id="inputImage" type="file" name="image" />
      </label>

      <label id="labelInputSubmit" htmlFor="inputSubmit">
        <input id="inputSubmit" type="submit" value="Enviar" />
      </label>

      {isUploading && (
        <LoadingContainer>
          <AiOutlineLoading3Quarters className="loading-icon" />
          <span>Enviando Imagem...</span>
        </LoadingContainer>
      )}
    </Container>
  );
};

export default UploadForm;
