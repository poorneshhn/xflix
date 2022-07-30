import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://poornesh-xflix.herokuapp.com",
});
