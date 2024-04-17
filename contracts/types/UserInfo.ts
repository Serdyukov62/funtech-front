import { Subevent } from "./event";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface activationCredentials {
  uid: string | null;
  token: string | null;
}

export interface IUserInfo {
  id: number | undefined;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string;
  phone: string | null;
  employer: string | null;
  occupation: string | null;
  experience: string;
  specialization: string[] | null;
  preferred_format: string;
  consent_personal_data_processing: boolean;
  consent_vacancy_data_processing: boolean;
  consent_random_coffee: boolean;
  profile_full: boolean;
  my_events: Subevent[];
  isLoggedIn: boolean;
}
