import { useAxios } from "../useAxios";
import { ref } from "vue";
import type { Ref } from "vue";

interface Quiz {
  id: string;
  name: string;
  authorId: string;
  questionsAmount: number;
  topics: string[];
  createdAt: string;
}

interface Question {
  id: string;
  statement: string;
  options: string[];
  hint: string;
  topics: string[];
  answer: string;
  quizId: string;
}

export function useFetchQuiz() {
  const { get } = useAxios();
  const questions: Ref<Question[]> = ref([]);
  const quiz: Ref<Quiz | null> = ref(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchQuiz = async (quizId: string): Promise<{ quiz: Quiz; questions: Question[] } | null> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await get(`/quiz/${quizId}`);

      console.log("Resposta do /quiz/:id:", response);

      if (response && response.data.quiz && Array.isArray(response.data.questions)) {
        return {
          quiz: response.data.quiz,
          questions: response.data.questions,
        };
      } else {
        console.error("A resposta da API não é válida:", response);
        error.value = "A resposta da API não contém um quiz ou questões válidas.";
        return null;
      }
    } catch (err: any) {
      error.value = "Erro ao buscar quiz: " + err.message;
      console.error("Erro na busca de quiz:", err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    fetchQuiz,
    questions,
    quiz,
    loading,
    error,
  };
}


