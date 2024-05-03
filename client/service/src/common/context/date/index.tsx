import contextFactory from '@context/contextFactory';

import useGlobalDateContextState from './useGlobalDateContextState';

const { Provider, useContext } = contextFactory(useGlobalDateContextState);

export { Provider as DateProvider, useContext as useDateContext };
