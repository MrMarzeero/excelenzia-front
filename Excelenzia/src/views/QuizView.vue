<template>
  <div class="problems-container">
    <h1>Lista de Problemas</h1>

    <div v-if="loading">Carregando problemas...</div>
    <div v-if="error">{{ error }}</div>

    <div v-if="questions.length > 0">
      <ProblemCard v-for="(question, index) in questions" :key="index" :problem="question" />
    </div>
    <p v-else-if="!loading && !error">Nenhum problema disponível.</p>
  </div>
</template>

<script setup>
import ProblemCard from "@/components/ProblemCard.vue";
import { useGenerateProblem } from "@/composables/Quiz Generator/useQuizGenerate";
import { onMounted } from "vue";

const { questions, loading, error, generateProblems } = useGenerateProblem();

onMounted(async () => {
  // Verifica se já existem questões no store, se não gera novas.
  if (questions.value.length === 0) {
    await generateProblems();
  }
});
</script>

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

