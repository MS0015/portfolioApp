import appApi from './appApi';

export const userApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (data) => ({
        url: '/user/send-otp',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/user/patient/sign-in',
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: '/user/patient/profile',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSendOtpMutation, useLoginMutation, useGetUserQuery } = userApi;
