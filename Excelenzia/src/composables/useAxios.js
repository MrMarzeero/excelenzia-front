import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Confirme a URL correta da sua API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function useAxios() {
  const request = async (method, url, data = null, config = {}) => {
    try {
      if (method === "get" || method === "delete") {
        return await axiosInstance[method](url, config);
      } else {
        return await axiosInstance[method](url, data, config);
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return {
    axiosInstance,
    get: (url, config = {}) => request("get", url, null, config),
    post: (url, data, config = {}) => request("post", url, data, config),
    put: (url, data, config = {}) => request("put", url, data, config),
    del: (url, config = {}) => request("delete", url, null, config),
  };
}

