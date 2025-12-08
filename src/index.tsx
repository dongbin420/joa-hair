import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

  const { worker } = await import('./mocks/browser');

  return worker.start({
    serviceWorker: { url: '/mockServiceWorker.js' },
    onUnhandledRequest: 'warn',
  });
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
});
