import * as S from './TimeSelection.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useFormContext } from 'react-hook-form';

function TimeSelection() {
  const { selected } = useBookingContext();
  const { getValues } = useFormContext();
  const selectedService = getValues('service');

  return <>시간 골라!!</>;
}

export default TimeSelection;
