import axios from "axios";

const API_URL = "http://localhost:3000";

async function logIn(userData) {
  try {
    const response = await axios.post(`${API_URL}/user/login`, userData);

    // Acesso corrigido às propriedades
    if (response.data && response.data.body && response.data.body.data && response.data.body.data.data && response.data.body.data.data.token && response.data.body.data.data.user && response.data.body.data.data.user.id && response.data.body.data.data.user.username && response.data.body.data.data.user.email) {
      const token = response.data.body.data.data.token;
      const userId = response.data.body.data.data.user.id;
      const username = response.data.body.data.data.user.username;
      const email = response.data.body.data.data.user.email;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);

      return { token, userId, username, email };
    } else {
      console.error("Estrutura da resposta da API inesperada:", response.data);
      throw new Error("Resposta da API inválida.");
    }
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  }
}

async function checkIfUserExists(email) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }

    const response = await axios.get(`${API_URL}/user/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.email === email;
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error);
    return false;
  }
}

async function getOrGenerateToken(userData) {
  const token = localStorage.getItem("token");

  if (token) {
    return {
      token,
      userId: localStorage.getItem("userId"),
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
    };
  }

  return await logIn(userData);
}

export { logIn, checkIfUserExists, getOrGenerateToken };

// Exemplo de uso
const userData = {
  email: "email@example.net",
  password: "ExempleUser123",
};

getOrGenerateToken(userData)
  .then(({ token, userId, username, email }) => {
    console.log("Token obtido:", token);
    console.log("ID do usuário:", userId);
    console.log("Nome de usuário:", username);
    console.log("Email do usuário:", email);
  })
  .catch((error) => {
    console.error("Erro ao obter token:", error);
  });






