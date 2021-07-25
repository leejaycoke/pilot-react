import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { userInfo } from "../types/login";

const name = "userReducer";

const initialState = {
  user: "",
  error: "",
  isLoginSuccess: false,
};

export const login = createAsyncThunk(
  `${name}/login`,
  async (dataToSubmit: userInfo, thunkAPI) => {
    const response = await apiClient.post("/auth/login", dataToSubmit);
    return response.data;
    // return apiClient
    //   .post("/auth/login", dataToSubmit)
    //   .then((res) => res)
    //   .catch((error) => error);
  }
);

export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.user = "";
      state.error = "";
      state.isLoginSuccess = false;
    },
    [login.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.error = "";
      state.isLoginSuccess = true;
    },
    [login.rejected.type]: (state, action) => {
      state.user = "";
      state.error = action.payload;
      state.isLoginSuccess = false;
    },
  },
});

export const loginReducer = loginSlice.reducer;
