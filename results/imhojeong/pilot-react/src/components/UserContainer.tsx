import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doLogout, doUserInfo } from '../apis/modules/auth';
import { useAppDispatch } from '../app/hooks';
import { changeAccessToken } from '../reducers/user';
import { store } from '../store/store';

function logout(dispatch: any, history: any) {
  doLogout().then(() => {
    dispatch(changeAccessToken(''));
    return history.push('/');
  });
}

export function UserContainer(): JSX.Element {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState({});
  const accessToken = store.getState().user.accessToken;
  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await doUserInfo(accessToken);
      setUserInfo(data);
    };
    fetchUserInfo();
  }, []);

  if (accessToken) {
    return (
      <>
        <ul>
          {Object.entries(userInfo).map(([key, value]) => {
            return (
              <li key={key}>
                {key} - {value}
              </li>
            );
          })}
        </ul>
        <button onClick={() => logout(dispatch, history)}>LOG_OUT</button>
      </>
    );
  } else {
    return <>ACCESS_TOKEN이 없어요</>;
  }
}
