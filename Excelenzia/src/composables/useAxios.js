import axios from "axios";

const API_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getUserToken = () => {
  const token = localStorage.getItem("token");
  return token; // Retorna null se não houver token
};

function isTokenToExpire(token) {
  if (!token) return true;

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const expiryTime = decodedToken.exp * 1000;
    const currentTime = Date.now();
    return expiryTime - currentTime < 5 * 60 * 1000; // 5 minutos antes da expiração
  } catch (error) {
    console.error("Erro ao verificar expiração do token:", error);
    return true;
  }
}

async function refreshToken() {
  try {
    const response = await axios.post(`${API_URL}/refresh_token`);
    const newToken = response.data.token;
    localStorage.setItem("token", newToken);
    return newToken;
  } catch (error) {
    console.error("Erro ao renovar token:", error);
    localStorage.removeItem("token");
    return null;
  }
}

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = getUserToken();

    if (token && isTokenToExpire(token)) {
      const newToken = await refreshToken();
      if (newToken) {
        token = newToken;
      } else {
        window.location.href = "/login";
        return Promise.reject({ response: { status: 401 } });
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
      console.error("Autenticação falhou. Redirecionando para login.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export function useAxios() {
  const request = async (method, url, data = null, config = {}) => {
    try {
      const response = await axiosInstance[method](url, data, config);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição:", error);

      if (error.response) {
        console.error("Detalhes do erro:", error.response.data);
      } else if (error.request) {
        console.error("Nenhuma resposta do servidor:", error.request);
      } else {
        console.error("Erro de configuração da requisição:", error.message);
      }

      throw error;
    }
  };

  return {
    axiosInstance,
    get: (url, config = {}) => request("get", url, null, config),
    post: (url, data, config = {}) => request("post", url, data, config),
    put: (url, data, config = {}) => request("put", url, data, config),
    delete: (url, config = {}) => request("delete", url, null, config),
  };
}


