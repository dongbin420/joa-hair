import { http } from './http';
import { DayStates, TimeSlotResponse } from '@/types/dayPickerType';

export const fetchDayStates = async (
  startDate: string,
  endDate: string,
  durationMinutes: string,
  serviceIds: string[] = [],
) => {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage('MOCK_ACTIVATE');

    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  }

  const params = new URLSearchParams();

  params.set('start', startDate);
  params.set('end', endDate);
  params.set('durationMinutes', durationMinutes);

  serviceIds.forEach((id) => {
    params.append('serviceIds', id);
  });

  return http.get<DayStates>(`/calendar/days?${params.toString()}`);
};

export const fetchTimeSlot = async (
  date: string,
  serviceIds: string[],
  durationMinutes: string,
) => {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage('MOCK_ACTIVATE');

    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  }

  const params = new URLSearchParams();

  params.set('date', date);
  params.set('durationMinutes', durationMinutes);

  serviceIds.forEach((id) => {
    params.append('serviceIds', id);
  });

  return http.get<TimeSlotResponse>(`/calendar/time-slots?${params.toString()}`);
};
