import { atom } from 'recoil';

import { STORAGE_KEY } from '../constants/storage';

const getAccessTokenDefaultValue = () => {
  const local = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);
  const session = sessionStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);

  if (local) return local;
  if (session) return session;
  return '';
};

export const accessTokenState = atom({
  key: 'accessToken',
  default: getAccessTokenDefaultValue(),
});
