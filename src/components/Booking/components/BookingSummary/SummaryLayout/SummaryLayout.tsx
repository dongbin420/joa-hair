import { useMemo, useState } from 'react';
import * as S from './SummaryLayout.styles';
import { useFormContext } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';
import triangleUpIcon from '@/assets/imgs/svg/triangleUp.svg';
import { BOOKING_SERVICES } from '@/constants/bookingData';
import { buildDurationMap, calculateTotalDuration } from '@/utils/dayPickerUtils';

const COLLAPSED_COUNT = 3;

function SummaryLayout() {
  const { watch } = useFormContext<BookingFormData>();
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedServices = watch('serviceIds');
  const date = watch('date');
  const startTime = watch('startTime');

  const durationMap = useMemo(() => buildDurationMap(BOOKING_SERVICES), []);
  const totalMinutes = useMemo(
    () => calculateTotalDuration(selectedServices, durationMap),
    [selectedServices, durationMap],
  );

  const formattedDate = date ? date.replaceAll('-', '/') : 'Select a date';
  const formattedTime = startTime || 'Select a time';
  const visibleServices = isExpanded
    ? selectedServices
    : selectedServices.slice(0, COLLAPSED_COUNT);
  const hiddenCount = selectedServices.length - visibleServices.length;

  return (
    <S.SummaryCard>
      <S.Header>
        <S.Title>Review your appointment</S.Title>
        <S.LocationBadge>JOA HAIR</S.LocationBadge>
      </S.Header>

      <S.Section>
        <S.Label>Location</S.Label>
        <S.PrimaryValue>JOA HAIR</S.PrimaryValue>
      </S.Section>

      <S.Section>
        <S.Label>Date &amp; Time</S.Label>
        <S.ValueRow>
          <S.PrimaryValue>{formattedDate}</S.PrimaryValue>
          <S.Pill isFilled={!!startTime}>{formattedTime}</S.Pill>
        </S.ValueRow>
      </S.Section>

      <S.Section>
        <S.ServicesHeader>
          <S.Label>Services</S.Label>
          {selectedServices.length > COLLAPSED_COUNT && (
            <S.ToggleButton onClick={() => setIsExpanded((prev) => !prev)} type="button">
              {isExpanded ? 'Hide list' : `Show all (${selectedServices.length})`}
              <S.ToggleIcon src={triangleUpIcon} alt="toggle services" isOpen={isExpanded} />
            </S.ToggleButton>
          )}
        </S.ServicesHeader>

        {selectedServices.length === 0 ? (
          <S.EmptyMessage>No services selected.</S.EmptyMessage>
        ) : (
          <S.ServiceList>
            {visibleServices.map((service) => (
              <S.ServicePill key={service}>{service}</S.ServicePill>
            ))}
            {!isExpanded && hiddenCount > 0 && <S.MorePill>+{hiddenCount} more</S.MorePill>}
          </S.ServiceList>
        )}
      </S.Section>

      <S.Divider />

      <S.Footer>
        <S.Label>Estimated duration</S.Label>
        <S.DurationText>
          {totalMinutes > 0 ? `${totalMinutes} minutes` : 'Add services to see timing'}
        </S.DurationText>
      </S.Footer>
    </S.SummaryCard>
  );
}

export default SummaryLayout;
