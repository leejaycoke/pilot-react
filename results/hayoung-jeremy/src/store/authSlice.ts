import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "service/api";
import { userInfo } from "types/auth";

// initial states

interface IuserState {
  user: userInfo;
  isFetching: boolean;
}

const initialUserState: IuserState = {
  user: {},
  isFetching: false,
};

export const getUserInfo = createAsyncThunk(`getUser`, async () => {
  try {
    const res = await apiClient.get("/v1/users/me");
    return res.data.response;
  } catch (e) {
    console.error(e);
    return await e.response.data.message;
  }
});

export const authSlice = createSlice({
  name: "getUser",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) =>
    builder // getUser
      .addCase(getUserInfo.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isFetching = false;
      }),
});

export const getUserReducer = authSlice.reducer;
