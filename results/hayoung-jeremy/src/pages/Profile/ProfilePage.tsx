import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// custom
import { Button, PageTemplate } from "components";
import { getUserInfo } from "store/authSlice";
import { useAppDispatch, useTypedSelector } from "store/store";
import { unwrapResult } from "@reduxjs/toolkit";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  // states :
  const user = useTypedSelector((state) => state.getUser.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUserInfo())
      .then(unwrapResult)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    history.push("/");
  };
  return (
    <PageTemplate title="Profile here">
      <p>ID : {user.id}</p>
      <p>NAME : {user.name}</p>
      <p>ACCOUNT : {user.account}</p>
      <p>Lv : {user.level}</p>
      <Button onClick={handleLogout}>로그아웃</Button>
    </PageTemplate>
  );
};

export default ProfilePage;
