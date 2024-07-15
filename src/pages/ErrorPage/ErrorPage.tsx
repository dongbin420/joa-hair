import * as S from './ErrorPage.styles';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Header />
        <S.ErrorPageContainer>
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          <p>{error.data}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </S.ErrorPageContainer>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <S.ErrorPageContainer>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </S.ErrorPageContainer>
        <Footer />
      </>
    );
  }
}

export default ErrorPage;
