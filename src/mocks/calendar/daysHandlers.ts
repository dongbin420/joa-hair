import { http, HttpResponse } from 'msw';
import { toMs, toYmdForHandler } from '../utils/date';
import { DAY, SUNDAY } from '../constants/date';
import { buildTimeCells, hasAnySelectableSlot } from '../data/mockCalendarData';

export const daysHandlers = [
  http.get('/calendar/days', async ({ request }) => {
    console.info('[MSW HIT]', request.url);
    const url = new URL(request.url);
    const startParam = url.searchParams.get('start');
    const endParam = url.searchParams.get('end');
    const durationParam = url.searchParams.get('durationMinutes');
    const serviceIds = url.searchParams.getAll('serviceIds');

    if (!startParam || !endParam) {
      return HttpResponse.json({ error: 'Missing start or end query parameter' }, { status: 400 });
    }

    if (!serviceIds || serviceIds.length === 0) {
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

    const startDay = toMs(startParam);
    const endDay = toMs(endParam);
    const days = [];

    const serverNow = new Date();

    for (let time = startDay; time <= endDay; time += DAY) {
      const date = toYmdForHandler(time);
      let state;

      if (new Date(date).getUTCDay() === SUNDAY) {
        state = 'closed';
      } else {
        const timeCells = buildTimeCells({
          date,
          durationMinutes,
          serverNow,
        });

        const hasSelectable = hasAnySelectableSlot(timeCells);

        if (hasSelectable) state = 'open';
        else state = 'unavailable';
      }

      days.push({ date, state });
    }

    return HttpResponse.json({ days });
  }),
];
