import React from 'react';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Form from '../components/Form';
import { signOut } from '../library/api/auth/auth';
import { useHistory } from 'react-router-dom';

function UserInfoPage() {
  const history = useHistory();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signOut();
      history.push('/');
    } catch (e) {
      // FIXME :: error message로 변경
      console.log(e);
    }
  };

  return (
    <Card>
      <div style={{ width: '400px' }}>
        <Form onSubmit={onSubmit}>
          <h2>🐾 회원 정보</h2>
          {/* FIXME :: 동적으로 정보 입력되도록 수정 */}
          <UserInfo dt="account" dd="devbadak" />
          <UserInfo dt="name" dd="개발바닥" />
          <UserInfo dt="level" dd="1" />
          <Footer>
            <Button type="submit" color="red">
              logout
            </Button>
          </Footer>
        </Form>
      </div>
    </Card>
  );
}

export default UserInfoPage;
