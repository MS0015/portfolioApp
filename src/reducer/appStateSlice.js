import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';

const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    loading: false,
    alert: {
      title: '',
      desc: '',
      type: 'error',
      isVisible: false,
    },
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(userApi.endpoints.login.initiate, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addMatcher(
  //     isAnyOf(userApi.endpoints.login.matchFulfilled, userApi.endpoints.login.matchRejected),
  //     (state) => {
  //       state.loading = false;
  //     }
  //   );
  // },
});
export const { setLoading, setAlert } = appStateSlice.actions;
export default appStateSlice.reducer;
