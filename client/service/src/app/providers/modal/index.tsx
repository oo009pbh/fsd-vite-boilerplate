import { index } from '@shared';
import Modal from './ui/Modal';
import useModalContextState from './model/useModalContextState';

const { Provider, useContext } = index(useModalContextState, <Modal />);

export { Provider as ModalProvider, useContext as useModalContext };
