import { isRejected, isRejectedWithValue } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

export const rtkQueryGlobalLogger = () => (next) => (action) => {
  if (isRejected(action)) {
    toast.error(action?.payload?.data.error.message);
  }

  // if (isFulfilled(action)) {
  //   if (action.payload.success) {
  //     toast.success(action.payload.message);
  //   }
  // }

  return next(action);
};
