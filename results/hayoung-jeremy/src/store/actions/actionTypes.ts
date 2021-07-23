import { createAction } from "@reduxjs/toolkit";

export const LOGIN_USER = createAction("LOGIN_USER");
export const LOGIN_SUCCESS = createAction("LOGIN_SUCCESS");
export const LOGIN_FAIL = createAction("LOGIN_FAIL");
export const SET_ERROR_MESSAGE = createAction("SET_ERROR_MESSAGE");
export const CLEAR_ERROR_MESSAGE = createAction("CLEAR_ERROR_MESSAGE");
