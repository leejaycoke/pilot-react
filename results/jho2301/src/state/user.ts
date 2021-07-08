import { selector } from 'recoil';

import { requestGetUserInfo } from '../service/request/user';
import { User } from '../types';
import { accessTokenState } from './login';

export const userInfoQuery = selector<User>({
  key: 'userInfoQuery',
  get: ({ get }) => {
    const accessToken = get(accessTokenState);

    return requestGetUserInfo(accessToken);
  },
});
