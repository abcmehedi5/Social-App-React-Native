import baseApi from "./api/baseApi";
// import authSlice from "./features/auth/authSlice";
// import jobsSlice from "./features/jobs/jobsSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  // auth: authSlice,
  // jobs: jobsSlice,
};
