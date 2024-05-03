import contextFactory from '@context/contextFactory';
// todo: 추후 lint 수정하기
// eslint-disable-next-line import/no-cycle
import GlobalModal from '@context/modal/GlobalModal';

import useGlobalModalContextState from '@context/modal/useGlobalModalContextState';

const { Provider, useContext } = contextFactory(
  useGlobalModalContextState,
  <GlobalModal />,
);

export { Provider as GlobalModalProvider, useContext as useGlobalModal };
