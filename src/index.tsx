import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import App from '@/App';
import MainPage from '@/pages/MainPage/MainPage';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import GalleryPage from '@/pages/GalleryPage/GalleryPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import InstagramAuth from './pages/InstagramAuth/InstagramAuth';

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
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'instagram-auth',
        element: <InstagramAuth />,
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
