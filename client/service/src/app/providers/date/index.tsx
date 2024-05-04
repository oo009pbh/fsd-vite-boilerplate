import { index } from '@shared';

import useGlobalDateContextState from './model/useGlobalDateContextState';

const { Provider, useContext } = index(useGlobalDateContextState);

export { Provider as DateProvider, useContext as useDateContext };
