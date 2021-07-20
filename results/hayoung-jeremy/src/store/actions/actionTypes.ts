import { loginInfo } from "../../types/login";

export const LOGIN_USER = "LOGIN_USER" as const;

export interface loginAction {
  type: typeof LOGIN_USER;
  payload: loginInfo;
}

export type LoginActionTypes = loginAction;
