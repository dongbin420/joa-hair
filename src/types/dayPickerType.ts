export interface DayState {
  date: string;
  state: 'open' | 'full' | 'closed';
}

export interface dayStates {
  days: DayState[];
}
