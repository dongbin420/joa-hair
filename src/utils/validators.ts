export const validateServiceIds = (value: string[]) => {
  return value.length > 0
    ? true
    : 'Please select at least one service for your appointment to continue.';
};

export const validateDate = (value: string) => {
  return value && value.length > 0 ? true : 'Please select a date and time.';
};

export const validateStartTime = (value: string) => {
  return value && value.length > 0 ? true : 'Please select a date and time.';
};
