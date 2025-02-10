import axios from "axios";

const API_URL = "http://localhost:3000/user";

// O token fixo que você quer usar
const FIXED_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjOTAyMTU5YS04YzdmLTQ5ZDktODA2MS04ZDU1YjA1MDBmNjUiLCJpYXQiOjE3MzkxNDM2MTYsImV4cCI6MTczOTE0NzIxNn0.sZDR_0jvb7cpg3SB9p303szsvf78IE6Oe-sOBYC3AJ8";

// Função para cadastrar usuário
async function signUp(userData) {
  try {
    const response = await axios.post(`${API_URL}/signUp`, userData);
    const token = response.data?.data?.token;
    const userId = response.data?.data?.userId;
    if (token && userId) {
      localStorage.setItem("token", token);
      console.log("Token armazenado no localStorage:", localStorage.getItem("token"));
      return { token, userId }; // Retorna tanto o token quanto o ID do usuário
    }
    throw new Error("Token ou ID não encontrados na resposta da API.");
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
}

// Função para fazer login
async function logIn(userData) {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log("Resposta de login:", response.data);
    const token = response.data?.data?.token;
    const userId = response.data?.data?.userId;
    console.log("Token recebido:", token);
    console.log("UserId recebido:", userId);
    if (token && userId) {
      localStorage.setItem("token", token);
      console.log("Token armazenado no localStorage:", localStorage.getItem("token"));
      return { token, userId }; // Retorna tanto o token quanto o ID do usuário
    }
    throw new Error("Token ou ID não encontrados na resposta da API.");
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  }
}

// Verifica se o usuário já existe na API
async function checkIfUserExists(email) {
  try {
    const token = FIXED_TOKEN; // Agora usamos o token fixo

    if (!token) {
      console.error("Token não encontrado. Faça login primeiro.");
      return false; // Se não houver token, retorne false
    }

    // Faz a requisição GET para 'user/{userId}' passando o token no cabeçalho Authorization
    const response = await axios.get(`${API_URL}/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Envia o token fixo no cabeçalho
      },
    });

    // Se a API retornar um usuário, significa que o usuário existe
    return response.data?.email === email;
  } catch (error) {
    if (error.response?.status === 404) {
      return false; // Usuário não encontrado
    }
    console.error("Erro ao verificar existência do usuário:", error);
    return false;
  }
}

// Obtém ou gera um token para autenticação
async function getOrGenerateToken() {
  // Agora, ignoramos a busca no localStorage e usamos o token fixo diretamente
  console.log("Token fixo sendo usado:", FIXED_TOKEN);

  return FIXED_TOKEN; // Retorna o token fixo
}

// Função para obter um recurso protegido
async function getProtectedResource() {
  try {
    const token = FIXED_TOKEN; // Agora usamos o token fixo

    if (!token) {
      console.error("Token não encontrado. Faça login primeiro.");
      return;
    }

    console.log("Enviando token no cabeçalho:", token); // Log para verificar o token

    const response = await axios.get(`${API_URL}/protected-endpoint`, {
      headers: {
        Authorization: `Bearer ${token}`, // Confirma se o token está correto
      },
    });

    console.log("Dados protegidos:", response.data);
  } catch (error) {
    console.error("Erro ao acessar recurso protegido:", error);
    if (error.response?.status === 403) {
      console.error("Erro 403: Acesso proibido. Verifique o token.");
    }
  }
}

export { signUp, logIn, getOrGenerateToken, getProtectedResource };




