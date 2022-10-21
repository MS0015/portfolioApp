import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';

const userStateSlice = createSlice({
  name: 'userState',
  initialState: {
    auth: {
      token: null,
    },
    userDetails: null,
  },
  reducers: {
    signOut(state) {
      state.user.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.auth.token = payload?.data?.token;
    });
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload }) => {
      state.userDetails = payload?.data;
    });
  },
});
export const { signOut } = userStateSlice.actions;
export default userStateSlice.reducer;
