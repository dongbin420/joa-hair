import * as S from './TimeSelection.styles';
import { useBookingContext } from '@/hooks/useBookingContext';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { toYmd } from '@/utils/dayPickerUtils';
import axios from 'axios';

function TimeSelection() {
  const { selected } = useBookingContext();
  const { getValues } = useFormContext();
  const selectedService = getValues('serviceIds');

  // 임시 api 테스트 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/calendar/time-slots', {
          params: {
            date: selected && toYmd(selected),
            serviceIds: selectedService,
            durationMinutes: 120,
          },
        });

        console.log('응답 데이터: ', res.data);
      } catch (err) {
        console.error('API 요청 실패:', err);
      }
    };

    fetchData();
  }, [selected, selectedService]);

  return <>시간 골라!!</>;
}

export default TimeSelection;
