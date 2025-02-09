import axios from "axios";

const API_URL = "http://localhost:3000/user";

// Função para cadastrar usuário
async function signUp(userData) {
  try {
    const response = await axios.post(`${API_URL}/signUp`, userData);
    const token = response.data.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
}

// Função para fazer login
async function logIn(userData) {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const token = response.data.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  }
}

// Verifica se o usuário já existe na API
async function checkIfUserExists(email) {
  try {
    const response = await axios.get(`${API_URL}/checkEmail`, {
      params: { email },
    });

    return response.data.exists; // Supondo que a API retorne { exists: true/false }
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error);
    return false;
  }
}

// Obtém ou gera um token para autenticação
async function getOrGenerateToken() {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    // Opcional: validar se o token ainda é válido
    return storedToken;
  }

  try {
    const userData = {
      username: "UserExample",
      email: "email@example.net",
      password: "ExempleUser123",
    };

    const userExists = await checkIfUserExists(userData.email);
    if (userExists) {
      return await logIn(userData);
    } else {
      return await signUp(userData);
    }
  } catch (error) {
    console.error("Erro ao obter ou gerar token:", error);
    throw error;
  }
}

// Função para obter um recurso protegido
async function getProtectedResource() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token não encontrado. Faça login primeiro.");
      return;
    }

    const response = await axios.get(`${API_URL}/protected-endpoint`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Dados protegidos:", response.data);
  } catch (error) {
    console.error("Erro ao acessar recurso protegido:", error);
  }
}

export { signUp, logIn, getOrGenerateToken, getProtectedResource };



