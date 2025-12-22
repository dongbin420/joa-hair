import * as S from './SelectionTitle.styles';
import { useFormContext } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

interface SelectionTitleProps {
  step: number;
  title: string;
  showSelectedServices?: boolean;
  showSelectedDateAndTime?: boolean;
}

function SelectionTitle({
  step,
  title,
  showSelectedServices,
  showSelectedDateAndTime,
}: SelectionTitleProps) {
  const { watch } = useFormContext<BookingFormData>();
  const services = showSelectedServices ? watch('serviceIds') : [];
  const date = showSelectedDateAndTime ? watch('date') : '';
  const startTime = showSelectedDateAndTime ? watch('startTime') : '';

  return (
    <S.SelectionTitleWrapper>
      <S.SelectionNum>{step}</S.SelectionNum>
      <S.SelectionTitleTextWrapper>
        <S.SelectionTitle>{title}</S.SelectionTitle>
        {showSelectedServices && <S.SelectedBrief>{services.join(', ')}</S.SelectedBrief>}
        {showSelectedDateAndTime && date && startTime && (
          <S.SelectedBrief>
            {date.replaceAll('-', '/')} {startTime}
          </S.SelectedBrief>
        )}
      </S.SelectionTitleTextWrapper>
    </S.SelectionTitleWrapper>
  );
}

export default SelectionTitle;
