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

    // 추후 상황보고 수정
    // trigger 실행 시 customer만 넘겼을때와, customer의 모든 프로퍼티를 개별로 넘겼을때, 검증 차이를 직접 실험을 통해 확인
    formData: ['customer'],
  },
] as const;

export const TOTAL_STEPS = selectionConfig.length;
