import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '@/App';
import MainPage from '@/pages/MainPage/MainPage';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Spinner from '@/components/Spinner/Spinner';

const AboutPage = lazy(() => delayForDemo(import('@/pages/AboutPage/AboutPage')));
const ServicesPage = lazy(() => delayForDemo(import('@/pages/ServicesPage/ServicesPage')));
const GalleryPage = lazy(() => delayForDemo(import('@/pages/GalleryPage/GalleryPage')));
const ContactPage = lazy(() => delayForDemo(import('@/pages/ContactPage/ContactPage')));

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
        element: (
          <Suspense fallback={<Spinner />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<Spinner />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<Spinner />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<Spinner />}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

// suspense ui 확인 위한 테스트용
function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => promise);
}

export default router;
