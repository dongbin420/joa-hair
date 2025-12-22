import {
  BUSINESS_CLOSE_HOUR,
  BUSINESS_OPEN_HOUR,
  SLOT_INTERVAL_MINUTES,
} from '../constants/timeSlot';
import { TimeSlotCell, TimeSlotState } from '@/types/dayPickerType';
import { pseudoRandom } from '../utils/date';

function* timeRangeGenerator() {
  for (let hour = BUSINESS_OPEN_HOUR; hour < BUSINESS_CLOSE_HOUR; hour++) {
    yield `${hour.toString().padStart(2, '0')}:00`;
    yield `${hour.toString().padStart(2, '0')}:30`;
  }
}

const isBeforeTime = (a: string, b: string) => {
  return a < b;
};

const baseTimeCellsCache = new Map<string, TimeSlotCell[]>();

const createBaseTimeCells = (date: string) => {
  const sequenceNumGenerator = pseudoRandom(`${date}`);
  const timeCells: TimeSlotCell[] = [];

  for (const time of timeRangeGenerator()) {
    const sequenceNum = sequenceNumGenerator();
    let state: TimeSlotState;

    if (sequenceNum < 0.15) state = 'booked';
    else if (sequenceNum < 0.18) state = 'blocked';
    else state = 'open';

    timeCells.push({
      time,
      state,
      selectable: false,
    });
  }

  return timeCells;
};

export const getBaseTimeCells = (date: string) => {
  if (!baseTimeCellsCache.has(date)) {
    baseTimeCellsCache.set(date, createBaseTimeCells(date));
  }

  return baseTimeCellsCache.get(date)!;
};

export const getCutoffTime = (date: string, serverNow: Date) => {
  const todayStr = serverNow.toISOString().slice(0, 10);
  const isToday = date === todayStr;

  if (!isToday) return null;

  const cutoff = new Date(serverNow.getTime() + 60 * 60 * 1000);
  return cutoff.toTimeString().slice(0, 5);
};

const withCutoffApplied = (date: string, serverNow: Date) => {
  const baseCells = getBaseTimeCells(date);
  const cutoffTime = getCutoffTime(date, serverNow);

  return baseCells.map<TimeSlotCell>((cell) => {
    const shouldBlock = cutoffTime && isBeforeTime(cell.time, cutoffTime);
    return {
      ...cell,
      state: shouldBlock ? 'blocked' : cell.state,
      selectable: false,
      endIfStart: undefined,
    };
  });
};

export const buildTimeCells = ({
  date,
  durationMinutes,
  serverNow = new Date(),
}: {
  date: string;
  durationMinutes: number;
  serverNow?: Date;
}) => {
  const timeCells = withCutoffApplied(date, serverNow);
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

  return timeCells;
};

export const hasAnySelectableSlot = (timeCells: TimeSlotCell[]) => {
  return timeCells.some((cell) => cell.state === 'open' && cell.selectable);
};
