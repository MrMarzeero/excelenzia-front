import axios from "axios";

// Criar uma instância do Axios com a URL da API
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Pegando a URL do .env
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para buscar dados da API
export async function getData(endpoint) {
  try {
    const response = await API.get(`/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
}

export default API;
