import { daysHandlers } from './calendar/daysHandlers';
import { timeSlotHandlers } from './calendar/timeSlotHandlers';

export const handlers = [...daysHandlers, ...timeSlotHandlers];
