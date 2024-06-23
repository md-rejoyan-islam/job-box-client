import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobSlice = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/jobs`,
  }),
  tagTypes: ["Jobs", "Job"],
  endpoints: () => ({}),
});

// const {} = userSlice;
