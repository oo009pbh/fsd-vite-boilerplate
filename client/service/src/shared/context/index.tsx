import React, { createContext, memo, useContext } from 'react';

export const contextFactory = <T,>(
  useContextState: () => T,
  ContextComponent?: React.ReactNode,
): {
  Provider: React.NamedExoticComponent<React.PropsWithChildren>;
  useContext: () => T;
} => {
  const Context = createContext({} as T);

  return {
    Provider: memo<React.PropsWithChildren>(({ children }) => (
      <Context.Provider value={useContextState()}>
        {children}
        {ContextComponent}
      </Context.Provider>
    )),
    useContext: () => useContext(Context),
  };
};
