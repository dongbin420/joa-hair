import { fetchTimeSlot } from '@/apis/dayPickerApi';
import { TimeSlotResponse } from '@/types/dayPickerType';
import { useQuery } from '@tanstack/react-query';

export const useFetchTimeSlot = (date: string, serviceIds: string[], durationMinutes: string) => {
  return useQuery({
    queryKey: ['timeSlot', date, serviceIds, durationMinutes],
    queryFn: async (): Promise<TimeSlotResponse> => {
      const response = await fetchTimeSlot(date, serviceIds, durationMinutes);
      return response.data;
    },
    gcTime: 0,
  });
};
