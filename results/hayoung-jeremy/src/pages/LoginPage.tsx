import React from "react";
import { PageTemplate, Button, Input } from "components";

const LoginPage = () => {
  return (
      <PageTemplate title="Login here">
        <Input type="text" placeholder="ID" />
        <Input type="password" placeholder="PW" />
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </PageTemplate>
  );
};

export default LoginPage;
