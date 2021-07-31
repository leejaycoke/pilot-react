import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { loginInfo } from "types/auth";

interface IloginState {
  userToken: unknown | string;
  isLoginSuccess: boolean;
}

const initialLoginState: IloginState = {
  userToken: "",
  isLoginSuccess: false,
};

// actions
export const login = createAsyncThunk(
  "login",
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
  name: "login",
  initialState: initialLoginState,
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
      .addCase(login.rejected, (state) => {
        state.userToken = "";
        state.isLoginSuccess = false;
      }),
});

export const loginReducer = loginSlice.reducer;
