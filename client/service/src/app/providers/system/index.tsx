import { contextFactory } from '@shared';

import useGlobalSystemContextState from './model/useGlobalSystemContextState';

const { Provider, useContext } = contextFactory(useGlobalSystemContextState);

export { Provider as SystemProvider, useContext as useSystemContext };
