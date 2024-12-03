import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ScrollRestoration } from 'react-router-dom';
import { useStickyHeader } from '@/hooks/useStickyHeader';

function App() {
  const isSticky = useStickyHeader();

  return (
    <>
      <ScrollRestoration />
      <Header isSticky={false} />
      {isSticky ? <Header isSticky={isSticky} /> : null}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
