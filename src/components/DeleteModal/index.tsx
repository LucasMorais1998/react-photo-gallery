import Modal from "react-modal";

import { FaWindowClose } from "react-icons/fa";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

interface IDeleteModalProps {
  isOpen: boolean;
  photoName: string;
  onRequestClose: () => void;
  onDelete: (name: string) => void;
}

const DeleteModal = ({
  isOpen,
  photoName,
  onRequestClose,
  onDelete,
}: IDeleteModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <FaWindowClose onClick={onRequestClose} className="react-modal-close" />

      <p className="react-modal-message">
        Deseja deletar permanentemente a imagem?
      </p>
      <div className="react-modal-buttons">
        <IoMdCheckmark
          className="react-modal-confirm-true"
          onClick={() => onDelete(photoName)}
        />
        <IoMdClose
          className="react-modal-confirm-false"
          onClick={onRequestClose}
        />
      </div>
    </Modal>
  );
};

export default DeleteModal;
