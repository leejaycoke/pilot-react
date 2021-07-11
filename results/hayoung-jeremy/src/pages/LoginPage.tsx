import React from "react";
import { PageTemplate } from "../components";
import Button from "../components/button";

const LoginPage = () => {
  return (
    <PageTemplate title="Login">
      <Button>로그인</Button>
      <Button>회원가입</Button>
    </PageTemplate>
  );
};

export default LoginPage;
