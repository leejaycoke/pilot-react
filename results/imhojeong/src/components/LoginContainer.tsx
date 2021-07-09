import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AuthenticationInfoRequest, doLogin } from '../apis/modules/auth';
import { useAppDispatch } from '../app/hooks';
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

type activeType = {
  active: boolean;
};

const CustomContainer = styled.div<activeType>`
  background: ${props => {
    return props.theme.color.main;
  }};

  color: ${props => {
    if (props.active) {
      return 'white';
    }
    return '#eee';
  }};
`;

export function LoginContainer(): JSX.Element {
  //   const count = useAppSelector(selectCount);
  const history = useHistory();

  const dispatch = useAppDispatch();
  const [loginID, setLoginID] = useState('');
  const [loginPASSWD, setLoginPASSWD] = useState('');

  return (
    <>
      <CustomContainer active>
        <span>Login Test 입니다.</span>
      </CustomContainer>
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
