import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthApi } from '../library/api/auth/auth';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Form from '../components/Form';
import ErrorMessage from '../components/ErrorMessage';

class DataType {
  id: number;
  account: string;
  name: string;
  level: number;

  constructor(id: number, account: string, name: string, level: number) {
    this.id = id;
    this.account = account;
    this.name = name;
    this.level = level;
  }
}

function UserInfoPage() {
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState('');
  const history = useHistory();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await AuthApi.signOut();
      history.push('/');
    } catch (e) { 
      console.log(e);
    }
  };

  const getUser = async () => {
    try {
      const res = await AuthApi.getUserInfo();
      setData(res.data);
    } catch (e) {
      const status = e.response;
      setError(status.data.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Card>
      <div style={{ width: '400px' }}>
        <h2>🐾 회원 정보</h2>
        {error && (
          <>
            <ErrorMessage>
              {error}
              <br />
              <Link to="/">홈으로 가기</Link>
            </ErrorMessage>
          </>
        )}
        <Form onSubmit={onSubmit}>
          {!error && (
            <>
              <UserInfo dt="id" dd={data && data.id} />
              <UserInfo dt="account" dd={data && data.account} />
              <UserInfo dt="name" dd={data && data.name} />
              <UserInfo dt="level" dd={data && data.level} />
              <Footer>
                <Button type="submit" color="red">
                  logout
                </Button>
              </Footer>
            </>
          )}
        </Form>
      </div>
    </Card>
  );
}

export default UserInfoPage;
