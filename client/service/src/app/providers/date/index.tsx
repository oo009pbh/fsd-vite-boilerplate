import { contextFactory } from '@shared';

import useGlobalDateContextState from './model/useGlobalDateContextState';

const { Provider, useContext } = contextFactory(useGlobalDateContextState);

export { Provider as DateProvider, useContext as useDateContext };
