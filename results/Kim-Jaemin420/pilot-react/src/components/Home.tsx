import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HttpFetch from '../FetchData/HttpFetch';
import { UserData } from '../FetchData/UserData';
import styled from 'styled-components';
import CommonBtn from './common/CommonBtn';

import { Layout } from 'antd';
const { Header, Content, Footer }  = Layout;

const HeaderWrapper = styled(Header)`
  background-color: #ff8123;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  const history = useHistory();
  const [userInfo, setUserinfo] = useState(new UserData(null));

  const getData = async() => {
    const info = new HttpFetch(`${process.env.REACT_APP_SERVER_URL}/v1/users/me`);
    const res = await info.GetFetch();
    await setUserinfo(() => res.data);
  };

  useEffect(() => {
    if (!sessionStorage.getItem('token')) history.push('/login');
    else getData();
  }, []);

  const logout = async () => {
    const logout = new HttpFetch(`${process.env.REACT_APP_SERVER_URL}/auth/logout`);
    const res = await logout.GetFetch();
    if (res.status === 204) {
      sessionStorage.removeItem('token');
      history.push('/login');
    }
  };

  return (
    <Layout>
      <HeaderWrapper>
        <h1 style={{display: 'inline-block'}}>홈 페이지</h1>
        <ul>
          {Object.entries(userInfo).map(([key, value]) => (
            <li key={key}><span>{key} : </span> {value}</li>
          ))}
          <CommonBtn style={{ width: 100}} onClick={logout}>로그아웃</CommonBtn>
        </ul>
      </HeaderWrapper>
      <Content>내용</Content>
      <Footer>푸터</Footer>

    </Layout>
  );
};

export default Home;
