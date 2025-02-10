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
      await getOrGenerateToken(); // Garante que o token esteja disponível

      const requestData = {
        subject: choiceStore.subject,
        topics: choiceStore.topics,
        quizType: choiceStore.quizType,
        questionsAmount: choiceStore.questionsAmount,
        description: choiceStore.description,
      };

      const response = await post("/quiz/generate/", requestData);

      if (response.data && response.data.quiz && response.data.quiz.id) {
        quiz.value = response.data.quiz;
        if (quiz.value) { 
          await fetchQuiz(quiz.value.id);
        } else {
          console.error("quiz.value ainda é null após a atribuição!");
          error.value = "Erro ao processar resposta da API.";
        }
      } else {
        throw new Error("A resposta da API não contém um quiz válido.");
      }
    } catch (err) {
      error.value = "Erro ao gerar problemas.";
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
    generateProblems,
  };
}








