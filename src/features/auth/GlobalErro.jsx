import { isFulfilled, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Log a warning and show a toast!
 */

export const rtkQueryErrorLogger = () => (next) => (action) => {
  console.log(action);
  if (isRejected(action)) {
    toast.error(action.error.message);
  }
  if (isFulfilled(action)) {
    console.log(action);
    toast.success("Success");
  }

  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  //   if (isRejectedWithValue(action)) {
  //     console.warn("We got a rejected action!");
  //     console.log(action.error);
  //   }

  return next(action);
};
