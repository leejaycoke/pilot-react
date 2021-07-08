import { STORAGE_KEY } from '../constants/storage';

export const clearAccessTokenStorage = () => {
  sessionStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
};
