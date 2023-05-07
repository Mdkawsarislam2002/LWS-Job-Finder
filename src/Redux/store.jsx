import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/Jobs/JobsSlice";
import filtersSlice from "./features/filtersAndSort/Filters";

const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
    filtersValue: filtersSlice.reducer,
  },
});

export default store;
