import router from "@/router";
import axios from "axios";

const requestAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

requestAxios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    router.push("/auth?message=needAuth");
  }
  return Promise.reject(error);
});

export default requestAxios;
