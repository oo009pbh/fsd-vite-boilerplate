import contextFactory from '@context/contextFactory';

import useGlobalSystemContextState from './useGlobalSystemContextState';

const { Provider, useContext } = contextFactory(useGlobalSystemContextState);

export { Provider as SystemProvider, useContext as useSystemContext };
