export const validateServiceIds = (value: string[]) => {
  return value.length > 0
    ? true
    : 'Please select at least one service for your appointment to continue.';
};
