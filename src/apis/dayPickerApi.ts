import { http } from './http';
import { DayStates } from '@/types/dayPickerType';

export const fetchDayStates = (startDate: string, endDate: string) => {
  return http.get<DayStates>(
    `https://api.mock.com/calendar/days?start=${startDate}&end=${endDate}&view=user`,
  );
};
