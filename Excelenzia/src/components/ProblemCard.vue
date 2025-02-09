<template>
    <div class="problem-card">
      <h2 class="problem-name">{{ problem.name }}</h2>
      <p class="problem-statement">{{ problem.statement }}</p>
  
      <div v-if="isMultipleChoice" class="options-container">
        <ul>
          <li v-for="(option, index) in problem.options" :key="index" class="option">
            {{ option }}
          </li>
        </ul>
      </div>
  
      <button class="show-answer-btn" @click="showAnswer = !showAnswer">
        {{ showAnswer ? "Esconder Resposta" : "Mostrar Resposta" }}
      </button>
  
      <p v-if="showAnswer" class="answer">{{ problem.answer }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const props = defineProps({
    problem: {
      type: Object,
      required: true
    }
  });
  
  const showAnswer = ref(false);
  
  // Verifica se o problema tem opções (múltipla escolha) ou é discursivo
  const isMultipleChoice = computed(() => props.problem.options.length > 0);
  </script>
  
  <style scoped>
  .problem-card {
    max-width: 600px;
    width: 100%;
    background: #0B2B52;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .problem-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 8px;
  }
  
  .problem-statement {
    font-size: 1rem;
    color: #d6d6d6;
    margin-bottom: 12px;
  }
  
  .options-container h3 {
    font-size: 0.9rem;
    font-weight: bold;
    color: #eeeeee;
    margin-bottom: 6px;
  }
  
  .options-container ul {
    list-style: none;
    padding: 0;
  }
  
  .option {
    padding: 8px;
    border-radius: 6px;
    background: #093B82;
    cursor: pointer;
    margin-bottom: 6px;
    color: white;
  }
  
  .option:hover {
    background: #072e64;
  }
  
  .show-answer-btn {
    background: #174D98;
    color: white;
    border: none;
    padding: 10px 16px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 12px;
  }
  
  .show-answer-btn:hover {
    background: #0056b3;
  }
  
  .answer {
    background: #021C40;
    padding: 8px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #d1d1d1;
    margin-top: 8px;
  }
  </style>
  