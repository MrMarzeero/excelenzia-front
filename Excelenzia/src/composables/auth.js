import axios from "axios";

async function signUp(userData) {
  try {
    const response = await axios.post("http://localhost:3000/user/signUp", userData);
    const token = response.data.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
}

async function logIn(userData) {
  try {
    const response = await axios.post("http://localhost:3000/user/login", userData);
    const token = response.data.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  }
}

async function getOrGenerateToken() {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    return storedToken;
  } else {
    try {
      const userData = {
        username: "UserExample",
        email: "nandabts12@gmail.com",
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
}

async function checkIfUserExists(email) {
  try {
    const response = await axios.get("http://localhost:3000/user/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.email === email; // Verifica se o email do usuário corresponde
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.warn("Token JWT não encontrado ou inválido. Cadastrando novo usuário...");
      return false;
    } else {
      console.error("Erro ao verificar existência do usuário:", error);
      return false;
    }
  }
}

export { signUp, logIn, getOrGenerateToken };


