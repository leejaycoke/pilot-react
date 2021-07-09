import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { clearAccessTokenStorage } from '../../service/auth';
import { accessTokenState } from '../../state/login';
import { userInfoQuery } from '../../state/user';
import { User } from '../../types';

const useUser = () => {
  const userInfoLoadable = useRecoilValueLoadable(userInfoQuery);
  const setAccessToken = useSetRecoilState(accessTokenState);

  const userInfo: User =
    userInfoLoadable.state === 'hasValue'
      ? userInfoLoadable.contents
      : { account: '', name: '', id: -1, level: -1 };

  if (userInfoLoadable.state === 'hasError') {
    clearAccessTokenStorage();
    setAccessToken('');
  }

  return { userInfo };
};

export default useUser;
