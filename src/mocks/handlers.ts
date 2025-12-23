import { daysHandlers } from './calendar/daysHandlers';
import { timeSlotHandlers } from './calendar/timeSlotHandlers';
import { emailVerificationHandlers } from './auth/emailVerificationHandlers';
import { bookingHandlers } from './booking/bookingHandlers';

export const handlers = [
  ...daysHandlers,
  ...timeSlotHandlers,
  ...emailVerificationHandlers,
  ...bookingHandlers,
];
