export const addMonths = (date: Date, n: number) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + n);
  return d;
};

export const getEndDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const toYmd = (date: Date) => {
  return date.toLocaleDateString('en-CA');
};
