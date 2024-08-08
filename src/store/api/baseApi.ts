import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/hireskills/api/v1"
    baseUrl: "http://195.35.9.33:8001/hireskills/api/v1",
  }),
  endpoints: (builder) => ({}),
});

export default baseApi;
