import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import appApi from './api/appApi';
import appStateReducer from './appStateSlice';
import userStateSlice from './userStateSlice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    userState: userStateSlice,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(appApi.middleware),
});

export default store;
