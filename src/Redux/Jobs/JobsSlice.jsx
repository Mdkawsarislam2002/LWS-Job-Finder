import { createSlice } from "@reduxjs/toolkit";
import { fetchJobs, deleteJObs, addNewJobs, editExistingJobs } from "./JobsApi";

const initialState = {
  jobs: [],
  loading: false,
  isError: false,
  errorMsg: "",
  addingJobs: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
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

    //  delate jobs
    builder
      .addCase(deleteJObs.pending, (state, action) => {
        console.log(action.meta.arg);

        state.loading = true;
        state.isError = false;
        state.errorMsg = "";
      })
      .addCase(deleteJObs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(deleteJObs.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      });
    //  add  jobs
    builder
      .addCase(addNewJobs.pending, (state) => {
        state.addingJobs = true;
      })
      .addCase(addNewJobs.fulfilled, (state, action) => {
        state.addingJobs = false;
        state.jobs.push(action.payload);
      })
      .addCase(addNewJobs.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
      });

    //  edit jobs
    builder
      .addCase(editExistingJobs.pending, (state) => {
        state.addingJobs = true;
      })
      .addCase(editExistingJobs.fulfilled, (state, action) => {
        state.addingJobs = false;
        let findIndex = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[findIndex] = action.payload;
      })
      .addCase(editExistingJobs.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
      });
  },
});

export default jobsSlice;
