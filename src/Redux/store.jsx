import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./Jobs/JobsSlice";

const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
  },
});

export default store;
