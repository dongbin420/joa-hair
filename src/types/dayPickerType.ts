export interface DayState {
  date: string;
  state: 'open' | 'full' | 'closed';
}

export interface DayStates {
  days: DayState[];
}

export type TimeSlotState = 'open' | 'booked' | 'blocked';

export interface TimeSlotCell {
  time: string;
  state: TimeSlotState;
  selectable: boolean;
  endIfStart: string;
}

export interface TimeSlotGrid {
  businessOpen: string;
  businessClose: string;
  slotIntervalMinutes: number;
}

export interface TimeSlotResponse {
  date: string;
  grid: TimeSlotGrid;
  cells: TimeSlotCell[];
}
