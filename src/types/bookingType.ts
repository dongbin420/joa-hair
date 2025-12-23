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

export interface BookingResponse {
  id: string;
  status: 'confirmed';
  createdAt: string;
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
