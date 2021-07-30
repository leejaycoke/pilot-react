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
  const userToken = useTypedSelector((state) => state.login.userToken);
  console.log(user);

  useEffect(() => {
    dispatch(getUserInfo(userToken))
      .then(unwrapResult)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [dispatch, userToken]);

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
