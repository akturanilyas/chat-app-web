import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';

type MainSlice = {
  user: User | undefined;
  preferences: {
    isDarkMode: boolean;
  };
};

const initialState: MainSlice = {
  user: undefined,
  preferences: {
    isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = mainSlice.actions;
