import { fetchDayStates } from '@/apis/dayPickerApi';
import { DayStates } from '@/types/dayPickerType';
import { useQuery } from '@tanstack/react-query';

export const useFetchDayStates = (
  startDate: string,
  endDate: string,
  durationMinutes: string,
  serviceIds: string[],
) => {
  return useQuery({
    queryKey: ['dayStates', startDate, endDate, durationMinutes, serviceIds],
    queryFn: async (): Promise<DayStates> => {
      const response = await fetchDayStates(startDate, endDate, durationMinutes, serviceIds);
      return response.data;
    },
    gcTime: 0,

    // staleTime을 기본값 0으로 한 이유는 달 이동간 새로운 데이터 페칭을 위해서
    // gcTime을 0으로 한 이유는 새로운 데이터 페칭간 이전 데이터를 잠시 보여주는 것을 막기 위해서
  });
};
