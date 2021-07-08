import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { AuthenticationInfoRequest, doLogin } from '../apis/modules/auth';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { change, changeAccessToken, changeLoggedState } from '../reducers/user';

function Login(
  loginID: string,
  loginPASSWD: string,
  dispatch: any,
  setLoginID: React.Dispatch<React.SetStateAction<string>>,
  setLoginPASSWD: React.Dispatch<React.SetStateAction<string>>,
  history: any
): void {
  dispatch(change([loginID, loginPASSWD]));
  doLogin(new AuthenticationInfoRequest(loginID, loginPASSWD))
    .then(payload => {
      if (payload['accessToken']) {
        dispatch(changeLoggedState());
        dispatch(changeAccessToken(payload['accessToken']));
        return history.push('/user');
      } else {
        alert('잘못된 입력입니다');
      }
    })
    .finally(() => {
      setLoginID('');
      setLoginPASSWD('');
      dispatch(change(['', '']));
    });
}

export function LoginContainer(): JSX.Element {
  //   const count = useAppSelector(selectCount);
  const history = useHistory();

  const dispatch = useAppDispatch();
  const [loginID, setLoginID] = useState('');
  const [loginPASSWD, setLoginPASSWD] = useState('');

  return (
    <>
      <input value={loginID} onChange={e => setLoginID(e.target.value)} />
      <input
        value={loginPASSWD}
        onChange={e => setLoginPASSWD(e.target.value)}
      />
      <button
        onClick={() =>
          Login(
            loginID,
            loginPASSWD,
            dispatch,
            setLoginID,
            setLoginPASSWD,
            history
          )
        }
      >
        LOGIN
      </button>
    </>
  );
}
