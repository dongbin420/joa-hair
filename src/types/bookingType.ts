export interface BookingFormData {
  serviceIds: string[];
  date: string;
  startTime: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    emailVerificationCode: string;
    emailVerified: boolean;
    note?: string;
  };
}

export interface ServiceOption {
  menu: string;
  time: string;
}

export interface BookingService {
  question: string;
  answer: {
    options: ServiceOption[];
  };
}
