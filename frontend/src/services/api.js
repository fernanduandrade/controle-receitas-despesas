import dotenv from 'dotenv';
import axios from "axios";

dotenv.config();

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

api.defaults.xsrfCookieName = "csrftoken";
api.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default api;
