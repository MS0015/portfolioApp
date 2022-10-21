import appApi from './appApi';

export const appointmentApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: '/appointment/patient',
        method: 'GET',
      }),
    }),
    getAllDoctor: builder.query({
      query: () => ({
        url: '/user/doctor',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCategoryQuery, useGetAllDoctorQuery } = appointmentApi;
