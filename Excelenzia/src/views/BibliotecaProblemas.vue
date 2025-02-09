<template>
  <main class="biblioteca-problemas">
    <div class="top-bar">
      <!-- Dropdown do Novo Simulado -->
      <div class="dropdown-container">
        <button @click="toggleSimulado" class="botao">Novo Simulado +</button>
        <div v-if="isSimuladoOpen" class="dropdown-menu">
          <p class="dropdown-title">Escolha sua matéria</p>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" @click="goToProg">
            <span class="item-icon">💻</span> Programação
          </button>
          <button class="dropdown-item" @click="goToMateFis">
            <span class="item-icon">√</span> Matemática
          </button>
          <button class="dropdown-item" @click="goToMateFis">
            <span class="item-icon">⚛</span> Física
          </button>
        </div>
      </div>

      <!-- Dropdown do Filtro -->
      <div class="dropdown-container">
        <button @click="toggleFiltro" class="botao">Filtrar<span>🔽</span></button>
        <div v-if="isFiltroOpen" class="dropdown-menu">
          <p class="dropdown-title">Filtrar por</p>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item">
            <span class="item-icon">📅</span> Ordem de criação
          </button>
          <button class="dropdown-item">
            <span class="item-icon">📖</span> Ordem alfabética
          </button>
          <button class="dropdown-item">
            <span class="item-icon">📚</span> Matéria
          </button>
        </div>
      </div>
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
import { ref } from 'vue';
import { useSimulados } from "@/composables/useSimulados";
import { useRouter } from 'vue-router';

const { simulados, loading, error } = useSimulados();
const router = useRouter();

const isSimuladoOpen = ref(false);
const isFiltroOpen = ref(false);

function toggleSimulado() {
  isSimuladoOpen.value = !isSimuladoOpen.value;
  isFiltroOpen.value = false; //Fecha o outro dropdown
}

function toggleFiltro() {
  isFiltroOpen.value = !isFiltroOpen.value;
  isSimuladoOpen.value = false; //Fecha o outro dropdown
}

function goToProg() {
  router.push('/problems/generate'); //Navega para o componente desejado
}

function goToMateFis() {
  router.push('/gerar-problema'); //Navega para o componente desejado
}
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

/* Container do dropdown */
.dropdown-container {
  position: relative;
  display: inline-block;
}

/* Botão de abrir o menu */
.dropdown-button {
  background-color: #1e3a5f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Ícone dentro do botão */
.icon {
  font-size: 14px;
}

/* Estilo do menu suspenso */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #0a2a4a;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 10;
}

/* Título dentro do menu */
.dropdown-title {
  color: #b0bec5;
  font-size: 14px;
  margin: 8px;
}

/* Linha divisória */
.dropdown-divider {
  height: 1px;
  background-color: #546e7a;
  margin: 8px 0;
}

/* Estilo dos itens do menu */
.dropdown-item {
  background: none;
  border: none;
  color: white;
  padding: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
}

.dropdown-item:hover {
  background-color: #123456;
}

/* Ícones dos itens */
.item-icon {
  font-size: 18px;
}

</style>