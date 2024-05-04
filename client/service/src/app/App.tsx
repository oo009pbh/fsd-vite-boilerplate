import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { globalStyle } from '@globalStyles';

import QueryPersistGate from '@template/QueryPersistGate';

import { queryClient } from '@api/reactQuery';

// Context
import { GlobalModalProvider } from '@context/modal';
import { SystemProvider } from '@context/system';
import { DateProvider } from '@context/date';
import { Global } from '@emotion/react';
import Root from '@pages/Root';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryPersistGate>
        <ReactQueryDevtools initialIsOpen={false} />
        <SystemProvider>
          <GlobalModalProvider>
            <DateProvider>
              <Global styles={globalStyle} />
              <Root />
            </DateProvider>
          </GlobalModalProvider>
        </SystemProvider>
      </QueryPersistGate>
    </QueryClientProvider>
  );
}

export default App;
