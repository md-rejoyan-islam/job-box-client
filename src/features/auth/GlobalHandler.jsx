import { isFulfilled, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

export const rtkQueryGlobalLogger = () => (next) => (action) => {
  if (isRejected(action)) {
    console.log(action);
    toast.error(action?.payload?.data.error.message);
    // toast.error(action?.payload?.message);
  }

  if (isFulfilled(action)) {
    toast.success("Success");
  }

  return next(action);
};
