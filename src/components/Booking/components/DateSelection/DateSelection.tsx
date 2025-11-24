import BookingCalendar from './BookingCalendar/BookingCalendar';
import TimeSelection from '../TimeSelection/TimeSelection';
import * as S from './DateSelection.styles';
import { useFormContext } from 'react-hook-form';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useState } from 'react';
import { validateStartTime } from '@/utils/validators';

function DateSelection() {
  const { formState, register } = useFormContext();
  const { selected } = useBookingContext();
  const [showTime, setShowTime] = useState(false);
  const errMsg = formState.errors.date?.message ?? formState.errors.startTime?.message;

  return (
    <>
      <S.DateSelectionContainer>
        <BookingCalendar />
        <S.RightContainer>
          <S.SearchButton onClick={() => setShowTime(true)} isActive={!!selected} type="button">
            SEARCH AVAILABLE TIMES
          </S.SearchButton>
          {selected && showTime && <TimeSelection />}
        </S.RightContainer>
      </S.DateSelectionContainer>
      {typeof errMsg === 'string' && <S.SelectNote>{errMsg}</S.SelectNote>}

      {/* startTime 필드에 대한 구현이 아직 이루어지지 않은 상태에서 버그 발생. 일단 주석처리 */}
      {/* <input
        type="hidden"
        {...register('startTime', {
          validate: validateStartTime,
        })}
      /> */}
    </>
  );
}

export default DateSelection;
