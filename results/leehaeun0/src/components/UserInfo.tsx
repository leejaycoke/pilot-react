import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Api, { User } from '../apis/api';
import useAsync from '../hooks/useAsync';
import LoadingPage from '../pages/LoadingPage';
import profileImage from '../utils/img/profile-image.png';
import Button from './Button';
import CenterBox from './CenterBox';
import Main from './Main';

function UserInfo() {
  const history = useHistory();
  const { data, loading, error: userError } = useAsync<User>(Api.getUser, true);
  const { run: logout, error: logoutError } = useAsync<string>(Api.logout);
  const { enqueueSnackbar } = useSnackbar();

  const onLogout = async () => {
    const isSuccess = await logout();
    if (isSuccess) {
      history.push('/login');
    }
  };

  useEffect(() => {
    const error = userError || logoutError;
    if (error) {
      enqueueSnackbar(error.response?.data?.message ?? error.message, {
        variant: 'error',
      });
    }
  }, [userError, logoutError, enqueueSnackbar]);

  if (loading || !data) return <LoadingPage />;

  return (
    <Main>
      <h1 className="a11yHidden">User Page</h1>
      <CenterBox>
        {data && (
          <>
            <StyledImg src={profileImage} alt="profile image" />
            <StyledName>{data.name}</StyledName>
            <StyledTable>
              <thead>
                <tr>
                  <th>account</th>
                  <th>level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.account}</td>
                  <td>{data.level}</td>
                </tr>
              </tbody>
            </StyledTable>
          </>
        )}
        <Button type="button" onClick={onLogout}>
          Logout
        </Button>
      </CenterBox>
    </Main>
  );
}

const StyledImg = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
`;

const StyledName = styled.div`
  margin: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 20px;

  th,
  td {
    text-align: center;
    width: 50%;
  }

  th {
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray};
    padding-bottom: 4px;
  }

  td {
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.color.main};
  }
`;

export default UserInfo;
