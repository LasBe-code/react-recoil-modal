import { atom } from 'recoil';

type ModalType = {
  isOpen: boolean;
  title: string;
  children: JSX.Element | string;
  callBack?: () => any;
};

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isOpen: false,
    title: '',
    children: '',
  },
});
