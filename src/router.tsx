import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '@/App';
import Spinner from '@/components/Spinner/Spinner';

const ErrorPage = lazy(() => import('@/pages/ErrorPage/ErrorPage'));
const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/ServicesPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage/GalleryPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage/ContactPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={<Spinner />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <MainPage />
          </Suspense>
        ),
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
// function delayForDemo<T>(promise: Promise<T>): Promise<T> {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, 500);
//   }).then(() => promise);
// }

export default router;
