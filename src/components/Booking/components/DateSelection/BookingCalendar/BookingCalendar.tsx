import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { addMonths, getEndDateOfMonth, toYmd } from '@/utils/dayPickerUtils';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { MONTH_RANGE } from '@/constants/bookingData';
import { useFetchDayStates } from '@/hooks/useFetchDayStates';
import { useFormContext } from 'react-hook-form';
import { validateDate } from '@/utils/validators';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useRef } from 'react';

function BookingCalendar() {
  const { register, setValue } = useFormContext();
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
  const { data: dayStates, status, error } = useFetchDayStates(startParam, endParam);
  const prevSelectedRef = useRef<Date | undefined>(undefined);

  // 요청 실패 버그 디버깅용
  if (error) {
    console.log(startParam, endParam, error);
  }

  const handleSelect = (day: Date | undefined) => {
    setSelected(day);
    // setShowTime(false);
  };

  const { open, full } = useMemo(() => {
    const open = dayStates?.days.filter((d) => d.state === 'open').map((d) => new Date(d.date));
    const full = dayStates?.days.filter((d) => d.state === 'full').map((d) => new Date(d.date));

    return { open, full };
  }, [dayStates]);

  const isDisabled = useCallback(
    (date: Date) => {
      const state = dayStates?.days.find((d) => d.date === toYmd(date))?.state;
      return state === 'closed' || state === 'full';
    },
    [dayStates],
  );

  // '오늘'(또는 달의 첫 날)이 '선택 불가능한 날'인 경우, selected가 되는 것을 방지하기 위한 useEffect
  useEffect(() => {
    let d = rangeStartDate;

    while (d <= rangeEndDate && isDisabled(d)) {
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    }

    setSelected(d <= rangeEndDate ? d : undefined);
    // setShowTime(false);
  }, [isDisabled, rangeStartDate, rangeEndDate, setSelected]);

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
        modifiers={{ open: open, full: full }}
        modifiersClassNames={{
          open: 'rdp-day_open',
          full: 'rdp-day_full',
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
