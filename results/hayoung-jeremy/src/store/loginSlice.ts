import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { loginInfo } from "../types/login";

const name = "userReducer";

interface IuserState {
  userToken: unknown | string;
  isLoginSuccess: boolean;
}

const initialState: IuserState = {
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

export const logout = createAsyncThunk(`${name}/logout`, async () => {
  try {
    const res = await apiClient.get("/auth/logout");
    return res.data;
  } catch (e) {
    console.error(e);
    return e;
  }
});

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
      })
      .addCase(logout.fulfilled, (state) => {
        state.userToken = "";
      }),
});

export const loginReducer = loginSlice.reducer;
