import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// custom
import { PageTemplate, Form, Button, Input } from "components";
import { AppDispatch, RootState } from "store/store";
import { login } from "store/loginSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const LoginPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string & unknown>("");
  const history = useHistory();
  const { userToken } = useSelector((state: RootState) => state.login);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = { account: id, password: password };
    dispatch(login(body))
      .then(unwrapResult)
      .then((res) => {
        history.push("/profile");
        if (typeof userToken === "string") {
          localStorage.setItem("userToken", JSON.stringify(userToken));
        }
      })
      .catch((err) => {
        console.log("err : " + err);
        setError(err);
      });
  };
  return (
    <PageTemplate title="Login">
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="ID" value={id} onChange={handleId} />
        <Input
          type="password"
          placeholder="PW"
          value={password}
          onChange={handlePw}
        />
        <p className="errorMessage">{error && error}</p>
        <Button type="submit">로그인</Button>
      </Form>
    </PageTemplate>
  );
};

export default LoginPage;
