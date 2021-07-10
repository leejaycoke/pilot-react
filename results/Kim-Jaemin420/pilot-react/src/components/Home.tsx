import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HttpFetch from '../FetchData/HttpFetch';
import { UserData } from '../FetchData/UserData';

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
    <>
      <div>홈</div>
      <ul>
        <li key='account'>{userInfo.account}</li>
        <li key='id'>{userInfo.id}</li>
        <li key='level'>{userInfo.level}</li>
        <li key='name'>{userInfo.name}</li>
      </ul>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default Home;
