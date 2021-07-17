import axios, { AxiosInstance, AxiosResponse } from "axios";
import { LoginEntity } from "../model/entity";

interface IHttpClient {
  instance: AxiosInstance;
  login(user: LoginEntity): Promise<AxiosResponse>;
  getUserInfo(): Promise<AxiosResponse>;
  logout(): Promise<AxiosResponse>;
}

export default class HttpClient implements IHttpClient {
  readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_END_POINT,
      timeout: 1000,
    });
  }

  async login(user: LoginEntity): Promise<AxiosResponse> {
    try {
      const res = await this.instance.post("/auth/login", user);
      this.instance.defaults.headers.common["Authorization"] = `Bearer ${res.data.accessToken}`;
      return res;
    } catch (error) {
      throw new Error(`login failed ${error}`);
    }
  }

  async getUserInfo(): Promise<AxiosResponse> {
    try {
      const res = await this.instance.get("/v1/users/me");
      return res;
    } catch (error) {
      throw new Error(`getUserInfo failed ${error}`);
    }
  }

  async logout(): Promise<AxiosResponse> {
    try {
      const res = await this.instance.get("/auth/logout");
      return res;
    } catch (error) {
      throw new Error(`getUserInfo failed ${error}`);
    }
  }
}
