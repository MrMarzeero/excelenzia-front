import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Correção: template literal
    } else {
      console.warn("Token JWT não encontrado.");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Autenticação falhou. Faça login novamente.");
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export function useAxios() {
  const request = async (method, url, data = null, config = {}) => {
    try {
      if (method === "get" || method === "delete") {
        return await axiosInstance[method](url, config);
      } else {
        return await axiosInstance[method](url, data, config);
      }
    } catch (error) {
      console.error("Erro na requisição:", error.message);
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

