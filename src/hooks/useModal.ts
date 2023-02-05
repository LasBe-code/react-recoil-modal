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

  const openModal = useCallback(
    (title: string, children: JSX.Element | string, callback?: () => any) =>
      setModalDataState({ isOpen: true, title: title, children: children, callBack: callback }),
    [setModalDataState],
  );

  return { modalDataState, closeModal, openModal };
};
