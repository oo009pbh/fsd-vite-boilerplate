import React, { createContext, memo, useContext } from 'react';

const contextFactory = <T,>(
  useContextState: () => T,
  ContextComponent?: JSX.Element,
): {
  Provider: React.NamedExoticComponent<React.PropsWithChildren>;
  useContext: () => T;
} => {
  const Context = createContext(Object.create(null) as T);

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

export default contextFactory;
