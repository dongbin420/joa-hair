import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import {
  addMonths,
  buildDurationMap,
  calculateTotalDuration,
  getEndDateOfMonth,
  toYmd,
} from '@/utils/dayPickerUtils';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { BOOKING_SERVICES, MONTH_RANGE } from '@/constants/bookingData';
import { useFetchDayStates } from '@/hooks/useFetchDayStates';
import { useFormContext } from 'react-hook-form';
import { validateDate } from '@/utils/validators';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useRef } from 'react';
import { BookingFormData } from '@/types/bookingType';

function BookingCalendar() {
  const { register, setValue, watch } = useFormContext<BookingFormData>();
  const { selected, setSelected, setShowTime, activeStep } = useBookingContext();
  const [today] = useState(() => new Date());
  const [visibleMonth, setVisibleMonth] = useState(() => new Date());
  const endMonth = useMemo(() => addMonths(today, MONTH_RANGE), [today]);
  const rangeStartDate = useMemo(
    () =>
      visibleMonth.getFullYear() === today.getFullYear() &&
      visibleMonth.getMonth() === today.getMonth()
        ? today
        : visibleMonth,
    [visibleMonth, today],
  );

  const rangeEndDate = useMemo(() => getEndDateOfMonth(rangeStartDate), [rangeStartDate]);
  const startParam = useMemo(() => toYmd(rangeStartDate), [rangeStartDate]);
  const endParam = useMemo(() => toYmd(rangeEndDate), [rangeEndDate]);
  const durationMap = useMemo(() => buildDurationMap(BOOKING_SERVICES), []);
  const selectedServiceIds = watch('serviceIds');
  const totalMinutes = useMemo(
    () => calculateTotalDuration(selectedServiceIds ?? [], durationMap),
    [selectedServiceIds, durationMap],
  );

  const {
    data: dayStates,
    status,
    error,
  } = useFetchDayStates(startParam, endParam, String(totalMinutes), selectedServiceIds ?? []);
  const prevSelectedRef = useRef<Date | undefined>(undefined);

  console.log(dayStates);

  // 요청 실패 버그 디버깅용
  if (error) {
    console.log(startParam, endParam, error);
  }

  const handleSelect = (day: Date | undefined) => {
    setSelected(day);
    // setShowTime(false);
  };

  const { open, unavailable } = useMemo(() => {
    const open = dayStates?.days?.filter((d) => d.state === 'open').map((d) => new Date(d.date));
    const unavailable = dayStates?.days
      ?.filter((d) => d.state === 'unavailable')
      .map((d) => new Date(d.date));

    return { open, unavailable };
  }, [dayStates]);

  const isDisabled = useCallback(
    (date: Date) => {
      if (status !== 'success' || !dayStates) return true;
      const state = dayStates?.days?.find((d) => d.date === toYmd(date))?.state;
      return state === 'closed' || state === 'unavailable';
    },
    [dayStates, status],
  );

  // '오늘'(또는 달의 첫 날)이 '선택 불가능한 날'인 경우, selected가 되는 것을 방지하기 위한 useEffect
  useEffect(() => {
    if (status !== 'success' || !dayStates) return;

    let d = rangeStartDate;

    while (d <= rangeEndDate && isDisabled(d)) {
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    }

    setSelected(d <= rangeEndDate ? d : undefined);
    // setShowTime(false);
  }, [isDisabled, rangeStartDate, rangeEndDate, setSelected, status, dayStates]);

  useEffect(() => {
    // 날짜가 실질적으로 변경된 경우에만 실행
    if (selected === prevSelectedRef.current) return;

    prevSelectedRef.current = selected;

    if (!selected) return;

    const shouldValidate = activeStep === 2;
    setValue('date', toYmd(selected), { shouldValidate });
    setValue('startTime', '', { shouldValidate });

    // 날짜 바꿀 때만 리스트 닫기
    setShowTime(false);
  }, [selected, setValue, setShowTime, activeStep]);

  return (
    <>
      <DayPicker
        startMonth={today}
        endMonth={endMonth}
        animate
        mode="single"
        required
        selected={selected}
        onSelect={handleSelect}
        disabled={[{ before: today }, isDisabled]}
        onMonthChange={(month) => {
          setVisibleMonth(month);
        }}
        modifiers={{ open: open, unavailable: unavailable }}
        modifiersClassNames={{
          open: 'rdp-day_open',
          unavailable: 'rdp-day_full',
        }}

        // footer={selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.'}
      />
      <input
        type="hidden"
        {...register('date', {
          validate: validateDate,
        })}
      />
    </>
  );
}

export default BookingCalendar;
