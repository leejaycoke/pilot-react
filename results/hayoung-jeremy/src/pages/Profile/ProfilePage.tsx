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
  // console.log("유저 정보 : ");
  // console.log(user);
  // console.log(user.account);
  // console.log(user.level);
  // console.log(user.name);

  useEffect(() => {
    const accessToken = localStorage.getItem("userToken");
    dispatch(getUserInfo(accessToken))
      .then(unwrapResult)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    history.push("/");
  };
  return (
    <PageTemplate title="Profile here">
      <p>Lv : {user.level}</p>
      <p>NAME : {user.name}</p>
      <Button onClick={handleLogout}>로그아웃</Button>
    </PageTemplate>
  );
};

export default ProfilePage;
