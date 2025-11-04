import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { addMonths, getEndDateOfMonth, toYmd } from '@/utils/dayPickerUtils';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { MONTH_RANGE } from '@/constants/bookingData';
import { useFetchDayStates } from '@/hooks/useFetchDayStates';

function BookingCalendar() {
  const [today] = useState(() => new Date());
  const [visibleMonth, setVisibleMonth] = useState(() => new Date());
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const endMonth = useMemo(() => addMonths(today, MONTH_RANGE), [today]);
  const endDate = useMemo(() => getEndDateOfMonth(visibleMonth), [visibleMonth]);
  const curMonth = useMemo(
    () =>
      visibleMonth.getFullYear() === today.getFullYear() &&
      visibleMonth.getMonth() === today.getMonth()
        ? today
        : visibleMonth,
    [visibleMonth, today],
  );

  const startParam = useMemo(() => toYmd(curMonth), [curMonth]);
  const endParam = useMemo(() => toYmd(endDate), [endDate]);
  const { data: dayStates, status, error } = useFetchDayStates(startParam, endParam);

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

  // '오늘'이 '선택 불가능한 날'인 경우, selected가 되는 것을 방지하기 위한 useEffect
  useEffect(() => {
    let d = today;

    while (isDisabled(d)) {
      const newDate = new Date(d);
      newDate.setDate(newDate.getDate() + 1);
      d = newDate;
    }

    setSelected(d);
  }, [dayStates, isDisabled, today]);

  return (
    <>
      <DayPicker
        startMonth={today}
        endMonth={endMonth}
        animate
        mode="single"
        required
        selected={selected}
        onSelect={setSelected}
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
    </>
  );
}

export default BookingCalendar;
