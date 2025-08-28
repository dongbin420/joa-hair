import BookingInner from './BookingInner/BookingInner';
import BookingProvider from './BookingProvider/BookingProvider';

function Booking() {
  return (
    <BookingProvider>
      <BookingInner />
    </BookingProvider>
  );
}

export default Booking;
