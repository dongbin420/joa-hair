export interface BookingFormData {
  serviceIds: string[];
  date: string;
  startTime: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    note?: string;
  };
}
