import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  let req = await AxiosInstance.get("jobs");
  return await req.data;
});
