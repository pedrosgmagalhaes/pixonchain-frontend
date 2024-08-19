// src/features/auth/authSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
  loggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
