import * as S from './SelectionTitle.styles';
import { useFormContext } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

// 이후에, 모든 셀렉션 컴포넌트에서 재사용할 수 있도록 구성(props를 사용하면 될 듯)

function SelectionTitle() {
  const { watch } = useFormContext<BookingFormData>();
  const services = watch('serviceIds');

  return (
    <S.SelectionTitleWrapper>
      <S.SelectionNum>1</S.SelectionNum>
      <S.SelectionTitleTextWrapper>
        <S.SelectionTitle>Choose Your Services</S.SelectionTitle>
        <S.SelectedServices>{services.join(', ')}</S.SelectedServices>
      </S.SelectionTitleTextWrapper>
    </S.SelectionTitleWrapper>
  );
}

export default SelectionTitle;
