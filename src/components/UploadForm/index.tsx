import { FormEvent } from "react";

import { Container } from "./styles";

interface IUploadFormProps {
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  isUploading: boolean;
}

const UploadForm = ({ onSubmitForm, isUploading }: IUploadFormProps) => {
  return (
    <Container method="POST" onSubmit={onSubmitForm}>
      <input type="file" name="image" />
      <input type="submit" value="Enviar" />
      {isUploading && "Enviando ..."}
    </Container>
  );
};

export default UploadForm;
