import contextFactory from '@context/contextFactory';
// todo: 추후 lint 수정하기
// eslint-disable-next-line import/no-cycle
import GlobalModal from '@context/modal/GlobalModal';

import useModalContextState from '@context/modal/useModalContextState';

const { Provider, useContext } = contextFactory(
  useModalContextState,
  <GlobalModal />,
);

export { Provider as ModalProvider, useContext as useModalContext };
