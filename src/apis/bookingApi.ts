import { http } from './http';
import type { BookingFormData, BookingResponse } from '@/types/bookingType';

export const createBooking = async (payload: BookingFormData) => {
  const { data } = await http.post<BookingResponse>('/reservations', payload);

  return data;
};
