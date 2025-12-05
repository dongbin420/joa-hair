import { BookingService } from '@/types/bookingType';
import { TimeSlotCell } from '@/types/dayPickerType';

export const addMonths = (date: Date, n: number) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + n);
  return d;
};

export const getEndDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const toYmd = (date: Date) => {
  return date.toLocaleDateString('en-CA');
};

export const buildDurationMap = (services: BookingService[]) => {
  const map = new Map<string, number>();

  services.forEach((service) => {
    service.answer.options.forEach((opt) => {
      const minutes = parseInt(opt.time, 10);
      map.set(opt.menu, minutes);
    });
  });

  return map;
};

export const calculateTotalDuration = (
  selectedMenus: string[],
  durationMap: Map<string, number>,
) => {
  return selectedMenus.reduce((total, menu) => {
    const minutes = durationMap.get(menu) ?? 0;
    return total + minutes;
  }, 0);
};

export const getTimeSlotViewState = (slot: TimeSlotCell) => {
  const { state, selectable } = slot;

  if (state === 'open' && selectable) return 'enabled';
  if (state === 'booked') return 'disabled';

  return 'hidden';
};
