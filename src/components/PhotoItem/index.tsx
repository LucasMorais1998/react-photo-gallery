import { Container } from "./styles";

interface IPhotoItemProps {
  name: string;
  url: string;
}

const PhotoItem = ({ name, url }: IPhotoItemProps) => {
  return (
    <Container>
      <h1>PhotoItem</h1>
    </Container>
  );
};

export default PhotoItem;
