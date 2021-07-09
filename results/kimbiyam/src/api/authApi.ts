import LoginData from "../models/LoginData";
import apiClient from "./apiClient";

const API_LOGIN = "/auth/login";
const API_LOGOUT = "/auth/logout";

const login = async (loginData: LoginData) => {
  try {
    const response = await apiClient.post(API_LOGIN, loginData.toJson());
    const { data } = response;

    const { accessToken } = data;

    return accessToken;
  } catch (e) {
    const { message } = e.response.data;
    throw message;
  }
};

const logout = async () => {
  try {
    const response = await apiClient.get(API_LOGOUT);
    const { data } = response;

    return data;
  } catch (e) {
    throw e;
  }
};

const authApi = { login, logout };

export default authApi;
