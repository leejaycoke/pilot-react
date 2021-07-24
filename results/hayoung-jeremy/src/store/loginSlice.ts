import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { userInfo } from "../types/login";

const name = "userReducer";

const initialState = {
  userAccount: "",
  userPassword: "",
  error: "",
  isLoginSuccess: false,
};

export const login = createAsyncThunk(
  `${name}/login`,
  async (dataToSubmit: userInfo, thunkAPI) => {
    return apiClient
      .post("/auth/login", dataToSubmit)
      .then((res) => res)
      .catch((error) => error);
  }
);

export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.userAccount = "";
      state.userPassword = "";
      state.error = "";
      state.isLoginSuccess = false;
    },
    [login.fulfilled.type]: (state, action) => {
      state.userAccount = action.payload;
      state.userPassword = action.payload;
      state.error = "";
      state.isLoginSuccess = true;
    },
    [login.rejected.type]: (state, action) => {
      state.userAccount = "";
      state.userPassword = "";
      state.error = action.payload;
      state.isLoginSuccess = false;
    },
  },
});

export const loginReducer = loginSlice.reducer;
