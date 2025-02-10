import axios from "axios";
import { useAxios } from "./useAxios";
import router from "@/router";

const BASE_URL = "http://localhost:3000"; // URL corrigida
const API_URL = "http://localhost:3000/user/login"; // URL corrigida
const { post } = useAxios();

async function createUser(username: string, email:string, password: string) {
  try {
    const response = await post(`${BASE_URL}/user/signUp`, {
      username,
      email,
      password
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("username", username);
    return response.data;
  } catch(err) {
    console.error(err);
  }
}

async function logIn(username: string, password: string) {
  try {
    const response = await axios.post(API_URL, {username, password});

    console.log("Resposta da API:", response.data);

    const token = response.data.body.data.data.token; // Acesso simplificado ao token
    const userId = response.data.body.data.data.user.id; // Acesso simplificado ao userId

    if (!token || !userId) {
      throw new Error("Token ou ID não encontrados na resposta da API.");
    }

    localStorage.setItem("token", token);
    console.log("Token armazenado no localStorage:", localStorage.getItem("token"));
    return response;
  } catch (error) {
    console.error("Erro ao logar usuário:", error.message, error.response?.status); // Informações extras sobre o erro
    throw error;
  }
}

// Função para obter o token ou fazer login
async function getToken() {
  const token = localStorage.getItem("token");  // Tenta pegar o token do localStorage

  if (token) {
    console.log("Token encontrado no localStorage:", token);
    return token;  // Se o token estiver armazenado, retorna ele
  }

  router.push("/signup");  // Se não tiver token, redireciona para a página de login
}

export { logIn, createUser, getToken };







