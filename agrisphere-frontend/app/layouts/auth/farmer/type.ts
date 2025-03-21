export type StepOneData = {
  role: string;
};

export type StepTwoData = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  address: string;
  dateOfBirth: string;
  sex: string;
};

export type StepThreeData = {
  land_size: number;
  ownership_type: string;
  produce: string;
  crops: string[];
  livestock: string[];
  storage: string[];
  equipment: string[];
  location: string;
};

export type StepFourData = {
  password: string;
  confirmPassword: string;
};

export type StepFiveData = {
  otp: number;
};

export type FormData = StepOneData &
  StepTwoData &
  StepThreeData &
  StepFourData &
  StepFiveData;

export type ServiceTwoData = {
  companyName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  address: string;
  dateOfBirth: string;
  sex: string;
};

export type ServiceThreeData = {
  categories: string;
};

export type ServiceFourData = {
  mechanization: string;
  inputSupply: string;
};

export type ServiceFiveData = {
  password: string;
  confirmPassword: string;
};

export type ServiceSixData = {
  otp: number;
};

export type ServiceFormData = ServiceTwoData &
  ServiceThreeData &
  ServiceFourData &
  ServiceFiveData &
  ServiceSixData;
