import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../utils/AxiosInstance";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ type, sortValue, searchValue }) => {
    //jobs?type=Internship&_sort=salary&_order=asc

    let query = `?type=Internship&_sort=id&_order=asc`;

    let req = await AxiosInstance.get(`jobs`);
    // internship
    // Internship
    return await req.data;
  }
);

export const deleteJObs = createAsyncThunk("jobs/deleteJobs", async (id) => {
  let req = await AxiosInstance.delete(`jobs/${id}`);
  return await req.data;
});

export const addNewJobs = createAsyncThunk(
  "jobs/addNewJobs",
  async (jobData) => {
    let req = await AxiosInstance.post("jobs", jobData);
    return await req.data;
  }
);

export const editExistingJobs = createAsyncThunk(
  "editJobs",
  async (editableData) => {
    let req = await AxiosInstance.put(`/jobs/${editableData.id}`, editableData);
    return await req.data;
  }
);
