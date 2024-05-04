import { index } from '@shared';

import useGlobalSystemContextState from './model/useGlobalSystemContextState';

const { Provider, useContext } = index(useGlobalSystemContextState);

export { Provider as SystemProvider, useContext as useSystemContext };
