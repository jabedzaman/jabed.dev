import axios from "axios";

export const axiosClient = axios.create({
  maxRate: 5,
  proxy: false,
});

axiosClient.interceptors.response.use(
  (response) => {
    const newRes: any = { ...response };
    return newRes;
  },
  (error) => {
    const newError = { ...error };
    return {
      data: {
        ...newError.data,
        error: newError.message,
      },
    };
  }
);
