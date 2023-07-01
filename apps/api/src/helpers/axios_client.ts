import axios from "axios";

export const axiosClient = axios.create({
  maxRate: 5,
  proxy: false,
});
