import { fetchDayStates } from '@/apis/dayPickerApi';
import { DayStates } from '@/types/dayPickerType';
import { useQuery } from '@tanstack/react-query';

export const useFetchDayStates = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ['dayStates', startDate, endDate],
    queryFn: async (): Promise<DayStates> => {
      const response = await fetchDayStates(startDate, endDate);
      return response.data;
    },
    gcTime: 0,
  });
};
