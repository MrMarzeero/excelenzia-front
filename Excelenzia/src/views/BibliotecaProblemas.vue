<template>
  <main>
    <div class="buttons">
    <h3>Novo Simulado +</h3>
    <h3>Filtrar</h3>
    </div>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <h3>{{ quiz.name }}</h3>
        <ul>
          <li v-for="topic in quiz.topics" :key="topic">{{ topic }}</li>
        </ul>
      </li>
    </ul>
  </main>
</template>




<script>
import { getData } from '@/composables/UseAxios'; // Importa o arquivo de configuração do Axios

export default {
  data() {
    return {
      quizzes: [] // Variável para armazenar os quizzes
    };
  },
  methods: {
    async buscarQuizzes() {
      try {
        const response = await getData('all'); // A URL da sua API
        this.quizzes = response.data; // Armazena os quizzes retornados da API
      } catch (error) {
        console.error('Erro ao buscar quizzes:', error);
      }
    }
  },
  mounted() {
    this.buscarQuizzes(); // Chama a função de busca assim que o componente for montado
  }
};
</script>

