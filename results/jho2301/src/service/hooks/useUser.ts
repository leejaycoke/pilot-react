import { User } from '../../types';
import { requestGetUserInfo } from './../request/user';

const useUser = () => {
  const accessToken = '';

  const getUserInfo = async (): Promise<User> => {
    try {
      const userInfo = await requestGetUserInfo(accessToken);

      return userInfo;
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  return { getUserInfo };
};

export default useUser;
