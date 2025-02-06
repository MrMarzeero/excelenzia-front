import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5173/",
});

export function useAxios() {
  const get = async (url, config = {}) => {
    try {
      return await axiosInstance.get(url, config);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    axiosInstance,
    get,
  };
}
