import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  initialState: {
    user: null,
  },
  name: "userSlice",
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { logout, setUser } = authSlice.actions;
