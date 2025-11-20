import { http, HttpResponse } from 'msw';
import { BUSINESS_OPEN_HOUR } from './../constants/timeSlot';
import { BUSINESS_CLOSE_HOUR } from './../constants/timeSlot';
import { SLOT_INTERVAL_MINUTES } from './../constants/timeSlot';

export const timeSlotHandlers = [
  http.get('/calendar/time-slots', ({ request }) => {
    const url = new URL(request.url);
    const dateParam = url.searchParams.get('date');
    const serviceName = url.searchParams.get('serviceName');
    const durationParam = url.searchParams.get('durationMinutes');

    if (!dateParam) {
      return HttpResponse.json({ error: 'Missing date query parameter' }, { status: 400 });
    }

    if (!serviceName) {
      return HttpResponse.json({ error: 'Missing serviceName query parameter' }, { status: 400 });
    }

    if (!durationParam) {
      return HttpResponse.json(
        { error: 'Missing durationMinutes query parameter' },
        { status: 400 },
      );
    }

    // 오늘 날짜 + 1시간 cutoff 계산(1시간 내 시간들은 blocked)

    // new Date()는 로컬 시간을 가리키지만, 내부적으론 UTC 기준으로 저장되어 있음
    const serverNow = new Date();

    // toISOString()는 UTC기준으로 문자열 변환을 함
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

    return HttpResponse.json({});
  }),
];
