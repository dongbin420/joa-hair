import * as S from './TimeSlot.styles';
import { TimeSlotCell } from '@/types/dayPickerType';
import { getTimeSlotViewState } from '@/utils/dayPickerUtils';
import { useFormContext } from 'react-hook-form';

interface TimeSlotProps {
  slotData: TimeSlotCell;
  handleSlotClick: (startTime: string) => Promise<void>;
}

function TimeSlot({ slotData, handleSlotClick }: TimeSlotProps) {
  const { watch } = useFormContext();
  const viewState = getTimeSlotViewState(slotData);
  const isDisabled = viewState === 'disabled';
  const isSelected = !isDisabled && slotData.time === watch('startTime');

  return (
    <S.SlotContainer
      onClick={isDisabled ? undefined : () => handleSlotClick(slotData.time)}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      {slotData.time}
    </S.SlotContainer>
  );
}

export default TimeSlot;
