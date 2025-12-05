import { http } from './http';
import { DayStates, TimeSlotResponse } from '@/types/dayPickerType';

export const fetchDayStates = (startDate: string, endDate: string) => {
  return http.get<DayStates>(`/calendar/days?start=${startDate}&end=${endDate}&view=user`);
};

export const fetchTimeSlot = (date: string, serviceIds: string[], durationMinutes: string) => {
  const params = new URLSearchParams();

  params.set('date', date);
  params.set('durationMinutes', durationMinutes);

  serviceIds.forEach((id) => {
    params.append('serviceIds', id);
  });

  return http.get<TimeSlotResponse>(`/calendar/time-slots?${params.toString()}`);
};
