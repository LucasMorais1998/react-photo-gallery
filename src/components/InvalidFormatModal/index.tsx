import Modal from "react-modal";

import { FaWindowClose } from "react-icons/fa";

interface IInvalidFormatModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InvalidFormatModal = ({
  isOpen,
  onRequestClose,
}: IInvalidFormatModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <FaWindowClose onClick={onRequestClose} className="react-modal-close" />
      <p className="react-modal-message">
        <span>Tipo de arquivo não permitido!</span> <br />
        <span>Tipos permitidos:</span> <br />
        <span>.jpeg, .jpg, .png</span>
      </p>
    </Modal>
  );
};

export default InvalidFormatModal;
