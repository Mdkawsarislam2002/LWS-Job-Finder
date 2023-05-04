import { createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "./JobsApi";

const initialState = {
  jobs: [],
  loading: false,
  isError: false,
  errorMsg: "",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
        state.errorMsg = "";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      });
  },
});

export default jobsSlice;
