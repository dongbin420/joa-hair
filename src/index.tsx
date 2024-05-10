import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import App from '@/App';
import MainPage from '@/pages/MainPage';
import ErrorPage from '@/pages/ErrorPage';
import AboutPage from '@/pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
