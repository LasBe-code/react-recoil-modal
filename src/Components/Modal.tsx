import { useModal } from '../hooks/useModal';
import { ModalDimmer, ModalBody, ModalTitle, ModalContents, ModalFooter, ModalButton } from './styleds/modal';

export const Modal = () => {
  const { closeModal } = useModal();

  return (
    <ModalDimmer>
      <ModalBody>
        <ModalTitle>123</ModalTitle>
        <ModalContents>Momizi</ModalContents>
        <ModalFooter>
          <ModalButton onClick={closeModal}>Cancel</ModalButton>
          <ModalButton>Ok</ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalDimmer>
  );
};
