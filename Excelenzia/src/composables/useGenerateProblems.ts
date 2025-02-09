import { useAxios } from "./useAxios";
import { ref } from "vue";
import type { Ref } from "vue";
import { useChoiceStore } from "../../stores/ChoicesProblemStore";

type Problem = {
  id: number;
  question: string;
  options?: string[];
  answer: string;
};

export function useGenerateProblem() {
  const choiceStore = useChoiceStore();
  const problems: Ref<Problem[]> = ref([]);
  const { post } = useAxios();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const generateProblems = async () => {
    loading.value = true;
    error.value = null;

    const requestData = {
      subject: choiceStore.subject,
      topics: choiceStore.topics,
      quizType: choiceStore.quizType,
      questionsAmount: choiceStore.questionsAmount,
      description: choiceStore.description,
    };

    try {
      const response = await post("/gerar-problema", requestData);
      if (Array.isArray(response.data)) {
        problems.value = response.data as Problem[];
      } else {
        throw new Error("A resposta da API não é um array válido.");
      }
    } catch (err) {
      error.value = "Erro ao gerar problemas.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    problems,
    loading,
    error,
    generateProblems,
  };
}



