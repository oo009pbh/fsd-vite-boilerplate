import { contextFactory } from '@shared';
// eslint-disable-next-line import/no-cycle
import Modal from './ui/Modal';
import useModalContextState from './model/useModalContextState';

const { Provider, useContext } = contextFactory(
  useModalContextState,
  <Modal />,
);

export { Provider as ModalProvider, useContext as useModalContext };
