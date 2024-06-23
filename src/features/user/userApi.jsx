import { userSlice } from "./userSlice";
import { setUser } from "../auth/AuthSlice";

const userApi = userSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser(res.data.data));
        } catch (error) {
          return { error: error?.error };
        }
      },
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

export const { useUserRegisterMutation } = userApi;
