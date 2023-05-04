import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:9000/",
});

export default AxiosInstance;
