import { jobSlice } from "./jobSlice";

const jobApi = jobSlice.injectEndpoints({
  endpoints: (builder) => ({
    addJob: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    getAllJobs: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Job"],
    }),
    deleteJobById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),
    applyForJob: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "POST",
        body: data,
      }),
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/apply/${email}`,
        method: "GET",
      }),
    }),
    askQuestion: builder.mutation({
      query: (data) => ({
        url: "/question",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
    replyInQuestion: builder.mutation({
      query: (data) => ({
        url: "/question/reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),

    getJobsByEmployerId: builder.query({
      query: (id) => ({
        url: `/apply/employer/${id}`,
        method: "GET",
      }),
    }),
  }),
  // userRegister: builder.mutation({
  //   query: (data) => ({
  //     url: "/",
  //     method: "POST",
  //     body: data,

  //   }),
  // }),
});

export const {
  useApplyForJobMutation,
  useGetAllJobsQuery,
  useAddJobMutation,
  useGetJobByIdQuery,
  useGetAppliedJobsQuery,
  useAskQuestionMutation,
  useGetJobsByEmployerIdQuery,
  useReplyInQuestionMutation,
  useDeleteJobByIdMutation,
} = jobApi;
