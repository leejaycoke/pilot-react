import { useState } from "react";
import { useHistory } from "react-router-dom";
import authApi from "../api/authApi";
import LoginData from "../models/LoginData";
import tokenStorage from "../utils/tokenStorage";

const useLogin = () => {
  const history = useHistory();
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginData: LoginData) => {
    try {
      setIsLoading(true);
      setErrMsg("");

      const accessToken = await authApi.login(loginData);

      setIsLoading(false);

      tokenStorage.setToken(accessToken);
      history.push("/user/profile");
    } catch (e) {
      setErrMsg(e);
      setIsLoading(false);
    }
  };

  return { errMsg, isLoading, login };
};

export default useLogin;
