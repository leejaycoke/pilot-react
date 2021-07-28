import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { loginInfo } from "../types/auth";

const name = "loginReducer";

interface IloginState {
  userToken: unknown | string;
  isLoginSuccess: boolean;
}

const initialState: IloginState = {
  userToken: "",
  isLoginSuccess: false,
};

// actions
export const login = createAsyncThunk(
  `${name}/login`,
  async (dataToSubmit: loginInfo, thunkAPI) => {
    try {
      const res = await apiClient.post("/auth/login", dataToSubmit);
      return res.data.accessToken;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(await e.response.data.message);
    }
  }
);

// slice
export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // login
      .addCase(login.pending, (state) => {
        state.userToken = "";
        state.isLoginSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userToken = action.payload;
        state.isLoginSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.userToken = "";
        state.isLoginSuccess = false;
      }),
});

export const loginReducer = loginSlice.reducer;
