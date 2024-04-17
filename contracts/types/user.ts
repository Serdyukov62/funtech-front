import { ZAnketaForm } from 'contracts/anketa/anketa';
import { ZSignIn } from 'contracts/sign/sign';
import { IEvent, Subevent } from './event';

type TUser = Omit<ZSignIn, 'password'> & ZAnketaForm;

export const user: TUser = {
  firstName: 'Дмитрий',
  lastName: 'Гуляев',
  phone: '+79998885566',
  workplace: 'Яндекс',
  position: 'Frontend-разрабочик',
  workExperience: '3_years',
  direction: ['backend', 'frontend'],
  participationFormat: 'offline',
  consentToDataProcessing: true,
  consentToSendResume: false,
  email: 'amoga@mail.ru',
};


export const token = "token"

export const validAuth: ZSignIn = {
  email: "amoga@mail.ru",
  password: "password"
}

export const signIn = async (data: ZSignIn) => {
  if (data.email === validAuth.email && data.password === validAuth.password) {
    return user
  }
}

