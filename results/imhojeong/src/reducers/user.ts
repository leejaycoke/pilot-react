import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface UserState {
  id: string;
  password: string;
  isLoggedIn: boolean;
  accessToken: string;
}

const initialState: UserState = {
  id: '',
  password: '',
  isLoggedIn: false,
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string[]>) => {
      state.id = action.payload[0];
      state.password = action.payload[1];
    },
    changeLoggedState: state => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    changeAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { change, changeLoggedState, changeAccessToken } =
  userSlice.actions;

export const userCount = (state: RootState) => state.user.id;

export default userSlice.reducer;
