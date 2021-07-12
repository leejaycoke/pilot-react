import React from 'react';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';
import Button from '../components/Button';

function UserInfoPage() {
  return (
    <Card>
      <div style={{ width: 412 }}>
        <h2>🐾 회원 정보</h2>
        {/* FIXME :: 동적으로 정보 입력되도록 수정 */}
        <UserInfo dt="account" dd="devbadak" />
        <UserInfo dt="name" dd="개발바닥" />
        <UserInfo dt="level" dd="1" />
        <Footer>
          <Button type="button" color="red">
            logout
          </Button>
        </Footer>
      </div>
    </Card>
  );
}

export default UserInfoPage;
