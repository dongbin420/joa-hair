import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { addMonths, getEndDateOfMonth, toYmd } from '@/utils/dayPickerUtils';
import { useState, useEffect, useMemo } from 'react';
import { MONTH_RANGE } from '@/constants/bookingData';
import axios from 'axios';
import { dayStates } from '@/types/dayPickerType';

function BookingCalendar() {
  const [today] = useState(() => new Date());
  const [visibleMonth, setVisibleMonth] = useState(() => new Date());
  const [selected, setSelected] = useState<Date | undefined>(today);
  const [dayStates, setDayStates] = useState<dayStates | null>(null);
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

  const { open, full } = useMemo(() => {
    const open = dayStates?.days.filter((d) => d.state === 'open').map((d) => new Date(d.date));
    const full = dayStates?.days.filter((d) => d.state === 'full').map((d) => new Date(d.date));

    return { open, full };
  }, [dayStates]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.mock.com/calendar/days?start=${startParam}&end=${endParam}&view=user`,
        );
        setDayStates(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [startParam, endParam]);

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
        disabled={[
          { before: today },
          (date) => dayStates?.days.find((d) => d.date === toYmd(date))?.state === 'closed',
        ]}
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
