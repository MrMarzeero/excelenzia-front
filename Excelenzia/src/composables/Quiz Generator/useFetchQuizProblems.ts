import { useAxios } from "../useAxios";
import { ref } from "vue";
import type { Ref } from "vue";

type Quiz = {
  id: string;
  name: string;
  authorId: string;
  questionsAmount: number;
  topics: string[];
  createdAt: string;
};

type Question = {
  id: string;
  statement: string;
  options: string[];
  hint: string;
  topics: string[];
  answer: string;
  quizId: string;
};

export function useFetchQuiz() {
  const { get } = useAxios();
  const quiz: Ref<Quiz | null> = ref(null);
  const questions: Ref<Question[]> = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchQuiz = async (quizId: string) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await get(`/quiz/${quizId}`);

      if (response.data && response.data.quiz && Array.isArray(response.data.questions)) {
        quiz.value = response.data.quiz;
        questions.value = response.data.questions;
      } else {
        throw new Error("A resposta da API não é válida.");
      }
    } catch (err) {
      error.value = "Erro ao buscar quiz.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    quiz,
    questions,
    loading,
    error,
    fetchQuiz,
  };
}


