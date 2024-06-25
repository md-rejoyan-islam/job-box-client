import { configureStore } from "@reduxjs/toolkit";

import { rtkQueryGlobalLogger } from "../features/auth/GlobalHandler";
import { authApi } from "../features/auth/AuthApi";
import authReducer from "../features/auth/AuthSlice";
import { userSlice } from "../features/user/userSlice";
import { jobSlice } from "../features/job/jobSlice";
import { othersSlice } from "../features/others/otherSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [jobSlice.reducerPath]: jobSlice.reducer,
    [othersSlice.reducerPath]: othersSlice.reducer,
    userState: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rtkQueryGlobalLogger,
      authApi.middleware,
      userSlice.middleware,
      jobSlice.middleware,
      othersSlice.middleware
    ),
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});
