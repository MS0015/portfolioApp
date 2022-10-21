import appApi from './appApi';

export const doctorApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: '/admin/category',
        method: 'GET',
      }),
    }),
    getFeatureDoctor: builder.query({
      query: () => ({
        url: '/user/doctor',
        method: 'GET',
      }),
    }),
    getAllDoctor: builder.query({
      query: () => ({
        url: '/user/doctor',
        method: 'GET',
      }),
    }),
    addFavDoc: builder.query({
      query: (parm) => ({
        url: '/favourite/patient/add-doctor',
        params: { parm },
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoryQuery,
  useGetAllDoctorQuery,
  useGetFeatureDoctorQuery,
  useAddFavDocQuery,
} = doctorApi;
