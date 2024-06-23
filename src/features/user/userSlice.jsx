import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/users`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

// const {} = userSlice;
