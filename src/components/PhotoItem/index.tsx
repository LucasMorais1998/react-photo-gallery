import { Container } from "./styles";

interface IPhotoItemProps {
  name: string;
  url: string;
}

const PhotoItem = ({ name, url }: IPhotoItemProps) => {
  return (
    <Container>
      <img src={url} alt={name} />
      <span>{name}</span>
    </Container>
  );
};

export default PhotoItem;
