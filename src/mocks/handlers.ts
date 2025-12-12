import { daysHandlers } from './calendar/daysHandlers';
import { timeSlotHandlers } from './calendar/timeSlotHandlers';
import { emailVerificationHandlers } from './auth/emailVerificationHandlers';

export const handlers = [...daysHandlers, ...timeSlotHandlers, ...emailVerificationHandlers];
