import { BookingContext } from '@/components/Booking/BookingProvider/BookingProvider';
import { useContext } from 'react';

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBookingContext must be used within BookingProvider');
  return context;
};
