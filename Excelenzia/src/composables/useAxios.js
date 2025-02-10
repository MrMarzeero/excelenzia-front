import axios from "axios";

const TOKEN_FIXO = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjOTAyMTU5YS04YzdmLTQ5ZDktODA2MS04ZDU1YjA1MDBmNjUiLCJpYXQiOjE3MzkxNDM2MTYsImV4cCI6MTczOTE0NzIxNn0.sZDR_0jvb7cpg3SB9p303szsvf78IE6Oe-sOBYC3AJ8"; // Substitua pelo seu token real

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN_FIXO}`, // Define o token fixo diretamente
  },
});

// Interceptor para garantir que o token fixo esteja sempre presente
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${TOKEN_FIXO}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas com erro 401
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Autenticação falhou. Verifique o token fixo.");
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

