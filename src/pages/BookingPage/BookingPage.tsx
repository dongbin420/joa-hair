import * as S from './BookingPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import Booking from '@/components/Booking/Booking';
import bannerImg5 from '@/assets/imgs/webp/bannerImg5.webp';
import { BOOKING_CONTENT } from '@/constants/bannerContent';

function BookingPage() {
  return (
    <>
      <PageBanner img={bannerImg5} content={BOOKING_CONTENT} />
      <S.BookingPageContainer>
        <Booking />
      </S.BookingPageContainer>
    </>
  );
}

export default BookingPage;
