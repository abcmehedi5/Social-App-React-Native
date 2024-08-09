// import { getFromLocalStorage } from "@/utils/local-storage";
import baseApi from '../baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // login user
    loginUser: builder.mutation({
      query: LoginData => ({
        url: '/auth/login',
        method: 'POST',
        // headers: {
        //   authorization: "Bearer " + getFromLocalStorage("accessToken"),
        // },
        body: LoginData,
      }),
    }),
    // refresh toekn
    generateNewRefreshToken: builder.mutation({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'POST',
      }),
    }),

    // login user data
    getSingleUser: builder.query({
      query: email => ({
        url: `/auth/get-single-user/${email}`,
        method: 'GET',
        // headers: {
        //   // authorization: "Bearer " + getFromLocalStorage("accessToken"),
        // },
      }),
    }),

    getAllUsers: builder.query({
      query: arg => {
        return {
          url: `/auth/get-users`,
          method: 'get',
          params: arg,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetSingleUserQuery,
  useGenerateNewRefreshTokenMutation,
  useGetAllUsersQuery,
} = authApi;
