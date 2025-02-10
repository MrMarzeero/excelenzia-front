import axios from "axios";

const API_URL = "http://localhost:3000/user/login"; // URL corrigida

async function logIn(userData) {
  try {
    const response = await axios.post(API_URL, userData);

    console.log("Resposta da API:", response.data);

    const token = response.data.body.data.data.token; // Acesso simplificado ao token
    const userId = response.data.body.data.data.user.id; // Acesso simplificado ao userId

    if (!token || !userId) {
      throw new Error("Token ou ID não encontrados na resposta da API.");
    }

    localStorage.setItem("token", token);
    console.log("Token armazenado no localStorage:", localStorage.getItem("token"));
    return { token, userId };
  } catch (error) {
    console.error("Erro ao logar usuário:", error.message, error.response?.status); // Informações extras sobre o erro
    throw error;
  }
}

async function checkIfUserExists(email) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token não encontrado. Faça login primeiro.");
      return false;
    }

    const response = await axios.get(`http://localhost:3000/user/${email}`, { // URL e método corrigidos
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.email === email; // Ajuste conforme a estrutura da sua API
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error.message, error.response?.status);
    return false;
  }
}

// Função para obter o token ou fazer login
async function getOrGenerateToken(userData) {
  const token = localStorage.getItem("token");  // Tenta pegar o token do localStorage

  if (token) {
    console.log("Token encontrado no localStorage:", token);
    return token;  // Se o token estiver armazenado, retorna ele
  }

  // Se não encontrar o token, faz o login com o usuário
  console.log("Fazendo login...");
  return await logIn(userData);  // Retorna o token do login realizado
}

export { logIn, checkIfUserExists, getOrGenerateToken };

// Usando os dados fornecidos para login:
const userData = {
  email: "email@example.net",  // ou username: "UserExample"
  password: "ExempleUser123"
};

getOrGenerateToken(userData).then(({ token, userId, username, email }) => {
  console.log("Token obtido:", token);  // O token gerado será retornado aqui
  console.log("ID do usuário:", userId);
  console.log("Nome de usuário:", username);
  console.log("Email do usuário:", email);
  getProtectedResource();  // Usando o token para acessar um recurso protegido
}).catch(error => {
  console.error("Erro ao obter token:", error);
});






