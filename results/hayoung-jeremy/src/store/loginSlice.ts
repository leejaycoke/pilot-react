import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { userInfo } from "../types/login";

const name = "userReducer";

interface IinitialState {
  userToken: unknown | string;
  isLoginSuccess: boolean;
}

const initialState: IinitialState = {
  userToken: "",
  isLoginSuccess: false,
};

export const login = createAsyncThunk(
  `${name}/login`,
  async (dataToSubmit: userInfo, thunkAPI) => {
    // trial-04
    // const response = await apiClient.post("/auth/login", dataToSubmit);
    // return response.data;

    // trial-03
    // return await apiClient.post("/auth/login", dataToSubmit);

    // trial-02
    try {
      const res = await apiClient.post("/auth/login", dataToSubmit);
      return res.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }

    // trial-01
    // return apiClient
    //   .post("/auth/login", dataToSubmit)
    //   .then((res) => res.data)
    //   .catch((error) => error);
  }
);

export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
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
