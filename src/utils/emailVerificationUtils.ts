export const formatSeconds = (value: number) => {
  const safeValue = Math.max(0, value);
  const minutes = Math.floor(safeValue / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (safeValue % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const normalizeEmail = (value: string | undefined) => value?.trim().toLowerCase() ?? '';
