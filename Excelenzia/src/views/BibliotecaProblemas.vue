<template>
  <main class="biblioteca-problemas">
    <div class="top-bar">
      <button class="botao">Novo Simulado +</button>
      <button class="botao">Filtrar <span>🔽</span></button>
    </div>

    <p v-if="loading" class="mensagem">Carregando...</p>
    <p v-if="error" class="mensagem erro">Erro: {{ error }}</p>

    <ul v-if="simulados.length" class="lista-simulados">
      <li v-for="simulado in simulados" :key="simulado.id" class="simulado-card">
        <div class="simulado-info">
          <strong class="titulo">{{ simulado.name }}</strong>
          <p class="descricao">{{ simulado.questions }} Questões</p>
          <p class="topicos">{{ simulado.topics.join(" • ") }}</p>
        </div>
        <button class="botao-resolver">Resolver ▶</button>
      </li>
    </ul>

    <p v-else-if="!loading" class="mensagem">Nenhum simulado encontrado.</p>
  </main>
</template>

<script setup>
import { useSimulados } from "@/composables/useSimulados";

const { simulados, loading, error } = useSimulados();
</script>

<style>
.biblioteca-problemas {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 84.6vh;
  background-color: #02182A;
  color: #D3E7F8;
}

.top-bar {
  display: flex;
  justify-content: left;
  gap: 1rem;
  margin-bottom: 2rem;
}

.botao {
  background: linear-gradient(45deg, #093B82, #1079be);
  color: white;
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}

.botao:hover {
  opacity: 0.85;
  transform: scale(1.1);
  transform: scale(0.9);
}

.lista-simulados {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.simulado-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #02182A;
  border: 1px solid #093B82;
  border-radius: 25px;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.simulado-info {
  margin-bottom: 1rem;
}

.titulo {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
}

.descricao, .topicos {
  font-size: 0.9rem;
  color: #D3E7F8;
}

.botao-resolver {
  background: linear-gradient(45deg, #093B82, #1079be);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.botao-resolver:hover {
  transform: scale(1.1);
  transform: scale(0.9);
}

.mensagem {
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}

.erro {
  color: red;
}
</style>

