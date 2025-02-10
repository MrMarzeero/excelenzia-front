import axios from "axios";

// Cria uma instância do axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para obter o token do usuário do localStorage ou de onde você o estiver armazenando
const getUserToken = () => {
  // Tenta pegar o token do localStorage
  const token = localStorage.getItem("token");
  
  if (!token) {
    console.error("Token não encontrado. Faça login primeiro.");
  }

  return token;
};

// Interceptor para garantir que o token do usuário esteja sempre presente
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getUserToken();  // Pega o token do usuário dinamicamente
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  // Configura o token no cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas com erro 401 (não autorizado)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Autenticação falhou. Verifique o token.");
    }
    return Promise.reject(error);
  }
);

// Função de requisição personalizada
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


