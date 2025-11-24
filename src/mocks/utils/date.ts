export const toMs = (ymd: string) => {
  const [y, m, d] = ymd.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};

export const toYmdForHandler = (ms: number) => {
  return new Date(ms).toISOString().slice(0, 10);
};
