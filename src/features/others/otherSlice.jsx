import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const othersSlice = createApi({
  reducerPath: "othersApi",
  baseQuery: fakeBaseQuery(),

  endpoints: () => ({}),
});
