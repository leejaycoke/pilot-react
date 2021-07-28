import React from "react";
import { useHistory } from "react-router-dom";

// custom
import { Button, PageTemplate } from "components";

const ProfilePage = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    history.push("/");
  };
  return (
    <PageTemplate title="Profile here">
      <div>ID :</div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </PageTemplate>
  );
};

export default ProfilePage;
