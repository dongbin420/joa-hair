import { http, HttpResponse } from 'msw';
import { toMs, toYmd } from '../utils/date';
import { DAY, SUNDAY } from '../constants/date';

export const daysHandlers = [
  http.get('/calendar/days', ({ request }) => {
    console.info('[MSW HIT]', request.url);
    const url = new URL(request.url);
    const startParam = url.searchParams.get('start');
    const endParam = url.searchParams.get('end');

    if (!startParam || !endParam) {
      return HttpResponse.json({ error: 'Missing start or end query parameter' }, { status: 400 });
    }

    const startDay = toMs(startParam);
    const endDay = toMs(endParam);
    const days = [];

    for (let time = startDay; time <= endDay; time += DAY) {
      const date = toYmd(time);
      let state;

      if (new Date(date).getUTCDay() === SUNDAY) {
        state = 'closed';
      } else {
        const r = Math.random();

        if (r < 0.2) state = 'full';
        else if (r < 0.3) state = 'closed';
        else state = 'open';
      }

      days.push({ date, state });
    }

    return HttpResponse.json({ days });
  }),
];
