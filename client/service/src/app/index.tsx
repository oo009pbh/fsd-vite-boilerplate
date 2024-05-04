import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@api/reactQuery';
import QueryPersistGate from '@template/QueryPersistGate';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DateProvider, ModalProvider, SystemProvider } from '@app/providers';
import { Global } from '@emotion/react';
import { globalStyle } from '@/styles';
import Root from '@pages/Root';
import { reportWebVitals } from '@shared';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <QueryPersistGate>
        <ReactQueryDevtools initialIsOpen={false} />
        <SystemProvider>
          <ModalProvider>
            <DateProvider>
              <Global styles={globalStyle} />
              <Root />
            </DateProvider>
          </ModalProvider>
        </SystemProvider>
      </QueryPersistGate>
    </QueryClientProvider>
  </BrowserRouter>,
);

reportWebVitals();
