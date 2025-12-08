import * as S from './TimeSelection.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useFormContext } from 'react-hook-form';
import { toYmd } from '@/utils/dayPickerUtils';
import { useFetchTimeSlot } from '@/hooks/useFetchTimeslot';
import { BookingFormData } from '@/types/bookingType';
import { buildDurationMap, calculateTotalDuration } from '@/utils/dayPickerUtils';
import { getTimeSlotViewState } from '@/utils/dayPickerUtils';
import { BOOKING_SERVICES } from '@/constants/bookingData';
import TimeSlot from './TimeSlot/TimeSlot';
import { useState } from 'react';

function TimeSelection() {
  const { selected, selectStartTime } = useBookingContext();
  const { getValues, trigger } = useFormContext<BookingFormData>();
  const selectedService = getValues('serviceIds');
  const durationMap = buildDurationMap(BOOKING_SERVICES);
  const totalMinutes = calculateTotalDuration(selectedService, durationMap);

  const {
    data: timeSlots,
    status,
    error,
  } = useFetchTimeSlot(toYmd(selected!), selectedService, String(totalMinutes));

  const visibleSlots =
    timeSlots?.timeCells.filter((slot) => getTimeSlotViewState(slot) !== 'hidden') ?? [];

  const handleSlotClick = async (startTime: string) => {
    selectStartTime(startTime);
    await trigger('date', { shouldFocus: false });
  };

  if (status === 'pending') {
    return null;
  }

  return (
    <>
      <S.TimeSlotContainer>
        {visibleSlots.length === 0 ? (
          <S.EmptyMessage>No available times.</S.EmptyMessage>
        ) : (
          visibleSlots.map((slot) => (
            <TimeSlot
              key={`${slot.time}-${slot.state}-${slot.selectable}`}
              slotData={slot}
              handleSlotClick={handleSlotClick}
            />
          ))
        )}
      </S.TimeSlotContainer>
    </>
  );
}

export default TimeSelection;
