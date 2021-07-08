import { useRecoilValue } from 'recoil';

import { userInfoQuery } from '../../state/user';

const useUser = () => {
  const userInfo = useRecoilValue(userInfoQuery);

  return { userInfo };
};

export default useUser;
