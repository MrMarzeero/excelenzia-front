<script setup>
import ProblemCard from "@/components/ProblemCard.vue";

const problems = [
  {
    name: "Circunferência de um Círculo",
    statement: "Como calcular a circunferência de um círculo?",
    options: [], // Se for múltipla escolha, adicionar opções aqui
    answer: "C = π * d"
  },
  {
    name: "Área do Triângulo",
    statement: "Qual é a fórmula para calcular a área de um triângulo?",
    options: ["A = b * h", "A = (b * h) / 2", "A = b + h"], // Exemplo de múltipla escolha
    answer: "A = (b * h) / 2"
  }
];
</script>

<template>
  <div class="problems-container">
    <h1>Lista de Problemas</h1>
    <div v-if="problems.length > 0">
      <ProblemCard v-for="(problem, index) in problems" :key="index" :problem="problem" />
    </div>
    <p v-else>Nenhum problema disponível.</p>
  </div>
</template>

<style scoped>
.problems-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #02182A;
  min-height: 88vh; 
}

h1 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.problems-container > div {
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 16px;
  width: 100%;
  max-width: 800px;
}

p {
  font-size: 1rem;
  color: #777;
}
</style>

