export interface DayState {
  date: string;
  state: 'open' | 'full' | 'closed';
}

export interface DayStates {
  days: DayState[];
}
