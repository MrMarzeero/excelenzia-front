<script setup>
    import { useGenerateProblem } from "@/composables/Quiz Generator/useQuizGenerate";

    const { quiz, questions, loading, error, generateProblems } = useGenerateProblem();
    console.log("Token carregado:", import.meta.env.VITE_AUTH_TOKEN);
</script>

<template>
  <div class="quiz-container">
    <button @click="generateProblems" :disabled="loading">
      {{ loading ? "Gerando..." : "Gerar Quiz" }}
    </button>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div v-if="quiz">
      <h2>{{ quiz.name }}</h2>
      <p><strong>ID:</strong> {{ quiz.id }}</p>
      <p><strong>Autor:</strong> {{ quiz.authorId }}</p>
      <p><strong>Tópicos:</strong> {{ quiz.topics.join(", ") }}</p>
      <p><strong>Quantidade de Questões:</strong> {{ quiz.questionsAmount }}</p>
      <p><strong>Criado em:</strong> {{ new Date(quiz.createdAt).toLocaleString() }}</p>

      <h3>Questões:</h3>
      <ul v-if="questions.length">
        <li v-for="question in questions" :key="question.id">
          <p><strong>Pergunta:</strong> {{ question.statement }}</p>
          <p v-if="question.hint"><strong>Dica:</strong> {{ question.hint }}</p>
          <p><strong>Resposta:</strong> {{ question.answer }}</p>
          <hr />
        </li>
      </ul>
      <p v-else>Carregando questões...</p>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  max-width: 600px;
  margin: auto;
  text-align: left;
}
button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
.error-message {
  color: red;
}
</style>
