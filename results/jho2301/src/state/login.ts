import { atom } from 'recoil';

export const accessTokenState = atom({
  key: 'accessToken',
  default: '',
});
