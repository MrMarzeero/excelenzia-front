import { useAxios } from "../useAxios";
import { ref } from "vue";
import type { Ref } from "vue";
import { useChoiceStore } from "../../../stores/ChoicesProblemStore";
import { useFetchQuiz } from "./useFetchQuizProblems";
import { getOrGenerateToken } from "../auth";

type Quiz = {
  id: string;
  name: string;
  authorId: string;
  questionsAmount: number;
  topics: string[];
  createdAt: string;
};

export function useGenerateProblem() {
  const choiceStore = useChoiceStore();
  const { post } = useAxios();
  const loading = ref(false);
  const error = ref<string | null>(null);
  const quiz: Ref<Quiz | null> = ref(null);
  const { fetchQuiz, questions } = useFetchQuiz();

  const generateProblems = async () => {
    loading.value = true;
    error.value = null;

    try {
      const token = await getOrGenerateToken();

      const requestData = {
        subject: choiceStore.subject,
        topics: Array.isArray(choiceStore.topics) ? choiceStore.topics : [],
        quizType: choiceStore.quizType,
        questionsAmount: choiceStore.questionsAmount,
        description: choiceStore.description,
      };

      const response = await post("/quiz/generate/", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Resposta do /quiz/generate:", response);

      if (response.data && response.data.id) {
        quiz.value = response.data;
        const quizId = quiz.value?.id;

        if (quizId) {
          try {
            const fetchedData = await fetchQuiz(quizId);
            if (fetchedData && fetchedData.quiz && fetchedData.questions && fetchedData.questions.length > 0) {
              quiz.value = fetchedData.quiz;
              questions.value = fetchedData.questions;
              console.log("Quiz and questions fetched:", fetchedData);
            } else {
              console.error("Dados incompletos:", fetchedData);
              error.value = "Dados do quiz ou questões incompletos.";
            }
          } catch (fetchError) {
            console.error("Erro ao buscar questões:", fetchError);
            error.value = "Erro ao buscar questões.";
          }
        } else {
          console.error("ID do quiz não encontrado:", response.data);
          error.value = "Erro ao obter ID do quiz.";
        }
      } else {
        console.error("Resposta da API inválida:", response.data);
        error.value = "A resposta da API está incompleta.";
      }
    } catch (err: any) {
      error.value = "Erro ao gerar problemas: " + err.message;
      console.error("Erro na geração de problemas:", err);

      if (err.response) {
        console.error("Detalhes do erro na resposta:", err.response.data, err.response.status);
        error.value = `Erro ao gerar problemas: ${err.response.data?.error || err.message} (Status: ${err.response.status})`;
      } else if (err.request) {
        console.error("Erro na requisição:", err.request);
        error.value += " (Erro na requisição)";
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    quiz,
    questions,
    loading,
    error,
    generateProblems,
  };
}








