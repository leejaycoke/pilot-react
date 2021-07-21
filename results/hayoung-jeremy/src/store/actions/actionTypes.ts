import { loginInfo } from "../../types/login";

export const LOGIN_USER = "LOGIN_USER" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "LOGIN_FAIL" as const;
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE" as const;
export const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE" as const;

export interface IloginAction {
  type: typeof LOGIN_SUCCESS | typeof LOGIN_FAIL;
  payload: loginInfo;
}

export interface IErrorMessageAction {
  type: typeof SET_ERROR_MESSAGE | typeof CLEAR_ERROR_MESSAGE;
}

export interface loginAction {
  type: typeof LOGIN_USER;
  payload: loginInfo;
}
