import apiClient from "service/api";
import * as actionTypes from "./actionTypes";
import { loginInfo } from "types/login";
import { AppDispatch } from "../store";

export const login = (dataToSubmit: loginInfo) => (dispatch: AppDispatch) => {
  return apiClient
    .post("/auth/login", dataToSubmit)
    .then((res) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: { user: res.data },
      });
      return Promise.resolve();
    })
    .catch((err) => {
      const message = err.toString();
      dispatch({ type: actionTypes.LOGIN_FAIL });
      dispatch({ type: actionTypes.SET_ERROR_MESSAGE, payload: message });
      return Promise.reject();
    });
};
