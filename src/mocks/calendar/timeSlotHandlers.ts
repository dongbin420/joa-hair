import { http, HttpResponse } from 'msw';
import { BUSINESS_OPEN_HOUR } from './../constants/timeSlot';
import { BUSINESS_CLOSE_HOUR } from './../constants/timeSlot';
import { SLOT_INTERVAL_MINUTES } from './../constants/timeSlot';
import { TimeSlotCell, TimeSlotState } from '@/types/dayPickerType';
import { pseudoRandom } from '../utils/date';

function* timeRangeGenerator() {
  for (let hour = BUSINESS_OPEN_HOUR; hour < BUSINESS_CLOSE_HOUR; hour++) {
    yield `${hour.toString().padStart(2, '0')}:00`;
    yield `${hour.toString().padStart(2, '0')}:30`;
  }
}

// 00:00 형태의 시간은 문자열비교로 가능.
const isBeforeTime = (a: string, b: string) => {
  return a < b;
};

export const timeSlotHandlers = [
  http.get('/calendar/time-slots', ({ request }) => {
    console.info('[MSW HIT]', request.url);
    const url = new URL(request.url);
    const dateParam = url.searchParams.get('date');
    const serviceIds = url.searchParams.getAll('serviceIds');
    const durationParam = url.searchParams.get('durationMinutes');

    if (!dateParam) {
      return HttpResponse.json({ error: 'Missing date query parameter' }, { status: 400 });
    }

    if (!serviceIds) {
      return HttpResponse.json({ error: 'Missing serviceIds query parameter' }, { status: 400 });
    }

    if (!durationParam) {
      return HttpResponse.json(
        { error: 'Missing durationMinutes query parameter' },
        { status: 400 },
      );
    }

    const durationMinutes = Number(durationParam);

    if (!Number.isFinite(durationMinutes) || durationMinutes <= 0) {
      return HttpResponse.json(
        { error: 'Invalid durationMinutes query parameter' },
        { status: 400 },
      );
    }

    // 오늘 날짜 + 1시간 cutoff 계산(1시간 내 시간들은 blocked)
    // new Date()는 로컬 시간을 가리키지만, 내부적으론 UTC 기준으로 저장되어 있음
    const serverNow = new Date();

    // toISOString()는 UTC기준으로 문자열 변환을 함. 따라서 dateParam도 UTC 기준으로 변환 되어 있어야 함.
    const todayStr = serverNow.toISOString().slice(0, 10);
    const isToday = dateParam === todayStr;
    let cutoffTime: string | null = null;

    // '현재 시간' 기준, 1시간 이후 시간을 만들기
    if (isToday) {
      // getTime은 UTC기준 타임스탬프(ms)를 돌려준다.
      // ms를 그대로 ui렌더링에 사용하지는 않고, 보통 비교를 위해, 변환 후 사용하기에 utc로 변환되어도 무방
      const cutoff = new Date(serverNow.getTime() + 60 * 60 * 1000);

      // toTimeString()은 로컬타임 존 기반으로 문자열 변환(시간 + 타임존)
      cutoffTime = cutoff.toTimeString().slice(0, 5);
    }

    const sequenceNumGenerator = pseudoRandom(`${dateParam}-${durationParam}`);
    const timeCells: TimeSlotCell[] = [];

    for (const time of timeRangeGenerator()) {
      if (cutoffTime && isBeforeTime(time, cutoffTime)) {
        timeCells.push({
          time,
          state: 'blocked',
          selectable: false,
        });

        continue;
      }

      const sequenceNum = sequenceNumGenerator();
      let state: TimeSlotState;

      if (sequenceNum < 0.2) state = 'booked';
      else if (sequenceNum < 0.23) state = 'blocked';
      else state = 'open';

      timeCells.push({
        time,
        state,
        selectable: false,
      });
    }

    const slotsNeeded = durationMinutes / SLOT_INTERVAL_MINUTES;

    if (Number.isInteger(slotsNeeded) && slotsNeeded > 0) {
      for (let i = 0; i < timeCells.length; i++) {
        const cell = timeCells[i];

        if (cell.state !== 'open') continue;

        const slots = timeCells.slice(i, i + slotsNeeded);
        if (slots.length < slotsNeeded) continue;

        const isAllOpen = slots.every((slot) => slot.state === 'open');
        if (!isAllOpen) continue;

        cell.selectable = true;
        const [startHour, startMin] = cell.time.split(':').map(Number);
        const tempDate = new Date(0, 0, 1, startHour, startMin + durationMinutes);
        const endTime = tempDate.toTimeString().slice(0, 5);
        cell.endIfStart = endTime;
      }
    }

    const timeSlotData = {
      date: dateParam,
      grid: {
        businessOpen: '09:00',
        businessClose: '21:00',
        slotIntervalMinutes: SLOT_INTERVAL_MINUTES,
      },
      timeCells,
    };

    return HttpResponse.json(timeSlotData);
  }),
];
