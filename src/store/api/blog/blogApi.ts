import { getJobs, getSingleJob } from "../../features/jobs/jobsSlice";
import baseApi from "../baseApi";

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all job list and filter data
    getBlogList: builder.query({
      query: ({ currentPage, limit, category, search }) => {
        // handle "all" filter
        if (!category) {
          category = "";
        }
        return {
          url: `/blog/get-blogs`,
          method: "get",
          params: {
            page: currentPage,
            limit,
            search,
            category,
          },
        };
      },
      async onQueryStarted(arg, { queryFulfilled, getState, dispatch }) {
        const result = await queryFulfilled;
        const { data } = result;

        if (data.length) {
          dispatch(getJobs(data.data));
        }
      },
    }),

    // get single blog
    getSingleBlog: builder.query({
      query: ({ id }) => ({
        url: `/blog/get-single-blog/${id}`,
        method: "get",
      }),
      async onQueryStarted(arg, { queryFulfilled, getState, dispatch }) {
        const result = await queryFulfilled;
        const { data } = result;
        if (data.length) {
          dispatch(getSingleJob(data));
        }
      },
    }),
    // post jobs data
    createJob: builder.mutation({
      query: (newJobData) => ({
        url: "/blog/create",
        method: "POST",
        body: newJobData,
      }),
    }),
  }),
});
export const {
  useGetBlogListQuery,
  useGetSingleBlogQuery,
  useCreateJobMutation,
} = jobsApi;
