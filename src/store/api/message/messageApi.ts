import baseApi from '../baseApi';

export const messageApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // post message data
    saveNewMessage: builder.mutation({
      query: newJobData => ({
        url: 'message/save-message',
        method: 'POST',
        body: newJobData,
      }),
    }),

    // Get all message
    getAllMessage: builder.query({
      query: arg => ({
        url: '/message/get-messages',
        method: 'GET',
        params: arg,
      }),
    }),
  }),
});
export const {useGetAllMessageQuery, useSaveNewMessageMutation} = messageApi;
