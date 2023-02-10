import { useRecoilState } from 'recoil';
import { modalState } from '../states/stateModal';
import { useCallback } from 'react';

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = useCallback(
    () =>
      setModalDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setModalDataState],
  );

  type OpenModalType = {
    title: string;
    content: JSX.Element | string;
    callback?: () => any;
  };
  const openModal = useCallback(
    ({ title, content, callback }: OpenModalType) =>
      setModalDataState({ isOpen: true, title: title, content: content, callBack: callback }),
    [setModalDataState],
  );

  return { modalDataState, closeModal, openModal };
};
