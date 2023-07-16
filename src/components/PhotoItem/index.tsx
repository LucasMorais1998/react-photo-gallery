import { MdDeleteForever } from 'react-icons/md';

import DeleteModal from '../../components/DeleteModal';

import { Container } from './styles';

interface IPhotoItemProps {
  name: string;
  url: string;
  isOpen: boolean;
  onOpenDeleteModal: () => void;
  onRequestClose: () => void;
  onDelete: (name: string) => void;
}

const PhotoItem = ({
  name,
  url,
  isOpen,
  onOpenDeleteModal,
  onRequestClose,
  onDelete,
}: IPhotoItemProps) => {
  return (
    <Container>
      <img src={url} alt={name} />
      <div className="photo-item">
        <span>{name}</span>
        <MdDeleteForever className="photo-item-delete-icon" onClick={onOpenDeleteModal} />
      </div>

      <DeleteModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        onDelete={onDelete}
        photoName={name}
      />
    </Container>
  );
};

export default PhotoItem;
