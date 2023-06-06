import axios from "axios";
const baseURL = "https://data-p4sm.onrender.com";
const axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance;