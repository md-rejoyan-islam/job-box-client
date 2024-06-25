import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { logout, setUser } from "./AuthSlice";
import axios from "axios";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),

  //   baseQuery: fetchBaseQuery({
  //     baseUrl: "https://pokeapi.co/api/v2/",
  //   }),

  tagTypes: ["User"],
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          if (result.user.email) {
            await signOut(auth);
          }
          return { data: { email: null } };
        } catch (error) {
          return {
            error: {
              data: {
                error: { message: error.message, status: error.code || 400 },
              },
            },
          };
        }
      },
    }),

    userLogin: builder.mutation({
      queryFn: async ({ email, password }, { dispatch }) => {
        try {
          const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          dispatch(setUser({ email: result.user.email }));
          return { data: { email: result.user.email } };
        } catch (error) {
          return {
            error: {
              data: {
                error: { message: error.message, status: error.code || 400 },
              },
            },
          };
        }
      },
    }),
    userLogout: builder.mutation({
      queryFn: async (_, { dispatch }) => {
        try {
          await signOut(auth);
          dispatch(logout());
          return { data: {} };
        } catch (error) {
          return {
            error: {
              data: {
                error: { message: error.message, status: error.code || 400 },
              },
            },
          };
        }
      },
      invalidatesTags: ["User"],
    }),
    isLoggedIn: builder.query({
      queryFn: async (_, { dispatch }) => {
        try {
          return new Promise((resolve) => {
            setTimeout(() => {
              onAuthStateChanged(auth, async (user) => {
                if (user) {
                  try {
                    const response = await axios.get(
                      `${import.meta.env.VITE_SERVER_URL}/api/v1/users/${
                        user.email
                      }`,
                      {
                        withCredentials: true,
                      }
                    );

                    if (response?.data?.data?.email) {
                      dispatch(setUser({ ...response.data.data }));
                      resolve({ data: response.data.data });
                      return;
                    }
                  } catch (error) {
                    dispatch(setUser({ email: user.email }));
                    resolve({ data: { email: user.email } });
                  }
                } else {
                  resolve({ data: {} });
                }
              });
            }, 3000);
          });
        } catch (error) {
          return {
            error: {
              data: {
                error: { message: error.message, status: error.code || 400 },
              },
            },
          };
        }
      },
    }),
    loginWithGoogle: builder.mutation({
      queryFn: async () => {
        try {
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider);
          return { data: { email: result.user.email } };
        } catch (error) {
          return {
            error: {
              data: {
                error: { message: error.message, status: error.code || 400 },
              },
            },
          };
        }
      },
    }),
    getLoggedInUser: builder.query({
      queryFn: async () => {
        const user = auth.currentUser;
        return { data: { email: user.email } };
      },
      providesTags: ["User"],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserLogoutMutation,
  useIsLoggedInQuery,
  useGetLoggedInUserQuery,
  useLoginWithGoogleMutation,
} = authApi;
