import type { Path } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

interface SelectionConfig {
  step: number;
  title: string;
  showSelectedServices?: boolean;
  formData: Path<BookingFormData>[];
}

export const selectionConfig: SelectionConfig[] = [
  {
    step: 1,
    title: 'Choose Your Services',
    showSelectedServices: true,
    formData: ['serviceIds'],
  },
  {
    step: 2,
    title: 'Choose Date & Time',
    formData: ['date', 'startTime'],
  },
  {
    step: 3,
    title: 'Booking Summary',

    // trigger 실행 시 customer만 넘겨도, 내부 각 필드하나하나 검증 진행함.
    formData: ['customer'],
  },
] as const;

export const TOTAL_STEPS = selectionConfig.length;
