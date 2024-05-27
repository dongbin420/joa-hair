import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Overlay from '@/components/Overlay/Overlay';
import { useOverlayToggle } from '@/hooks/useOverlayToggle';

function App() {
  const { isOverlayOpen, toggleOverlay } = useOverlayToggle();

  return (
    <>
      {isOverlayOpen ? (
        <Overlay toggleOverlay={toggleOverlay} />
      ) : (
        <>
          <Header toggleOverlay={toggleOverlay} />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
