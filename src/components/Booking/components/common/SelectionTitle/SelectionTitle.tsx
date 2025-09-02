import * as S from './SelectionTitle.styles';
import { useFormContext } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

interface SelectionTitleProps {
  step: number;
  title: string;
  showSelectedServices?: boolean;
}

function SelectionTitle({ step, title, showSelectedServices }: SelectionTitleProps) {
  const { watch } = useFormContext<BookingFormData>();
  const services = showSelectedServices ? watch('serviceIds') : [];

  return (
    <S.SelectionTitleWrapper>
      <S.SelectionNum>{step}</S.SelectionNum>
      <S.SelectionTitleTextWrapper>
        <S.SelectionTitle>{title}</S.SelectionTitle>
        {showSelectedServices && <S.SelectedServices>{services.join(', ')}</S.SelectedServices>}
      </S.SelectionTitleTextWrapper>
    </S.SelectionTitleWrapper>
  );
}

export default SelectionTitle;
