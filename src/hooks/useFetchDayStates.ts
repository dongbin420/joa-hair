import { fetchDayStates } from '@/apis/dayPickerApi';
import { DayStates } from '@/types/dayPickerType';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

type DayStatesOptions = Omit<
  UseQueryOptions<DayStates, unknown, DayStates, QueryKey>,
  'queryKey' | 'queryFn'
>;

export const useFetchDayStates = (
  startDate: string,
  endDate: string,
  durationMinutes: string,
  serviceIds: string[],
  options?: DayStatesOptions,
) => {
  return useQuery({
    queryKey: ['dayStates', startDate, endDate, durationMinutes, serviceIds],
    queryFn: async (): Promise<DayStates> => {
      const response = await fetchDayStates(startDate, endDate, durationMinutes, serviceIds);
      return response.data;
    },
    gcTime: 0,
    ...options,
  });
};

// 이전
// import { fetchDayStates } from '@/apis/dayPickerApi';
// import { DayStates } from '@/types/dayPickerType';
// import { useQuery } from '@tanstack/react-query';

// export const useFetchDayStates = (
//   startDate: string,
//   endDate: string,
//   durationMinutes: string,
//   serviceIds: string[],
// ) => {
//   return useQuery({
//     queryKey: ['dayStates', startDate, endDate, durationMinutes, serviceIds],
//     queryFn: async (): Promise<DayStates> => {
//       const response = await fetchDayStates(startDate, endDate, durationMinutes, serviceIds);
//       return response.data;
//     },
//     gcTime: 0,
//   });
// };
