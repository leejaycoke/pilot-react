import LoginRequest from "@/models/LoginRequest";
import Token from "@/models/Token";
import User from "@/models/User";
import axios, { AxiosInstance, AxiosPromise } from "axios";

import store from "@/store";

const BASE_URL = "http://localhost:5000/";
const api = {
  login: "auth/login",
  logout: "auth/logout",
  myInfo: "v1/users/me",
};

function loginUser(loginRequest: LoginRequest): AxiosPromise<Token> {
  const instance = getInstance();
  instance.interceptors.response.use(
    (config) => config,
    (error) => Promise.reject(error.response)
  );
  return instance.post(api.login, loginRequest);
}

function logoutUser(): void {
  getInstance().get(api.logout);
}

function fetchMyInfo(): AxiosPromise<User> {
  const instance = getInstance();
  instance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = "Bearer " + store.getters.accessToken;
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  instance.interceptors.response.use(
    (config) => config,
    (error) => Promise.reject(error.response)
  );
  return instance.get(api.myInfo);
}

function getInstance(): AxiosInstance {
  return axios.create({ baseURL: BASE_URL });
}

export { loginUser, logoutUser, fetchMyInfo };
