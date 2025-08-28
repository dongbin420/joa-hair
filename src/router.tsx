import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import MainPage from '@/pages/MainPage/MainPage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import GalleryPage from '@/pages/GalleryPage/GalleryPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import BookingPage from '@/pages/BookingPage/BookingPage';

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
        path: 'booking',
        element: <BookingPage />,
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
