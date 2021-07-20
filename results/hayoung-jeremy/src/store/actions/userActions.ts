import apiClient from "service/api";
import * as actionTypes from "./actionTypes";
import { loginInfo } from "types/login";

export const loginAction = (dataToSubmit: loginInfo) => {
  const data = apiClient.post("/auth/login", dataToSubmit);
  return {
    type: actionTypes.LOGIN_USER,
    payload: data,
  };
};
