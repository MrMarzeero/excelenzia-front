<template>
      <main class="home-problems-content">
        <div class="add-new-problem">
          <h1>Nenhum Simulado ainda!</h1>
          <p>1. Clique em "Novo Simulado"</p>
          <p>2. Explore diversas opções de personalização</p>
          <p>3. Comece a resolver!</p>
          <button class="criar-novo-simulado" @click="goToSimulado">Novo Simulado +</button>
        </div>
      </main>
  </template>
  
  <script>
export default {
  methods: {
    goToSimulado() {
      this.$router.push('/Tipo-de-Simulado'); // Navega para o componente desejado
    },
  },
};
</script>
    
  <style>

    .home-problems-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #02182A;
        color: #D3E7F8;
    }
    
    .add-new-problem {
        padding: 2rem;
        color: #D3E6F8;
        text-align:left;
        border: 1px solid #0A5180;
        border-radius: 2em;
        max-width: 600px;
        margin: 2rem auto;
    }
    
    .criar-novo-simulado {
        margin-top: 1rem;
        background-color: #D3E6F8;
        color:#F2F2F2;
        font-family: Poppins;
        font-size: 15px;
        font-weight: 600;
        padding: 1rem;
        border-radius: 30px;
        border: none;
        text-align: center;
        cursor: pointer;
        background: linear-gradient(45deg, #093B82, #1079be);/* Degradê */
        animation: gradient 5s ease infinite;
    }

    .criar-novo-simulado:hover { /*Esse tal de hover é pra quando passa o mouse em cima*/
        transform: scale(1.1); /* Efeito de aumento ao passar o mouse */
    }

    .criar-novo-simulado:active {
        transform: scale(0.9); /* Efeito de redução ao clicar */
    }
  </style>
  
  
  