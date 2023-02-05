import { useModal } from '../hooks/useModal';
import {
  ModalDimmer,
  ModalBody,
  ModalTitle,
  ModalContents,
  ModalFooter,
  ModalButton,
  ModalButtonWithBorder,
} from './styleds/modal';

export const Modal = () => {
  const { modalDataState, closeModal } = useModal();

  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer>
          <ModalBody>
            <ModalTitle>{modalDataState.title}</ModalTitle>
            <ModalContents>{modalDataState.content}</ModalContents>
            <ModalFooter>
              <ModalButtonWithBorder onClick={closeModal}>Cancel</ModalButtonWithBorder>
              <ModalButton onClick={modalDataState.callBack}>Ok</ModalButton>
            </ModalFooter>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  );
};
