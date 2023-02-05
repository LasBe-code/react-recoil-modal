import { useModal } from '../hooks/useModal';
import { Modal } from './Modal';

export const ModalContainer = () => {
  const {
    modalDataState: { isOpen },
  } = useModal();
  return isOpen ? <Modal /> : null;
};
