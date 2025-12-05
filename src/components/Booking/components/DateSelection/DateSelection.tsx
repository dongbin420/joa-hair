import BookingCalendar from './BookingCalendar/BookingCalendar';
import TimeSelection from '../TimeSelection/TimeSelection';
import * as S from './DateSelection.styles';
import { useFormContext } from 'react-hook-form';
import { useBookingContext } from '@/hooks/useBookingContext';
import { validateStartTime } from '@/utils/validators';

function DateSelection() {
  const { formState, register } = useFormContext();
  const { selected, showTime, setShowTime } = useBookingContext();
  const errMsg = formState.errors.date?.message ?? formState.errors.startTime?.message;
  console.log(showTime);
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

      <input
        type="hidden"
        {...register('startTime', {
          validate: validateStartTime,
        })}
      />
    </>
  );
}

export default DateSelection;
