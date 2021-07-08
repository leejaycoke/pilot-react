import LoginData from "../models/LoginData";
import apiClient from "./apiClient";

const API_LOGIN = "/auth/login";

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

const authApi = { login };

export default authApi;
