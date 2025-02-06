import { ref } from "vue";
import axios, { AxiosError } from "axios";
import type { SolutionTemplate } from "../../types";
import { useProblemStore } from "../../stores/ProblemStore";

export function useSolveModel() {
  const formData = ref({
    language: "cpp",
  });

  const loading = ref(false);
  const error = ref<AxiosError | null>(null);
  const result = ref<SolutionTemplate | null>(null);
  const problemStore = useProblemStore();

  const submitForm = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.post(
        "https://dreamcode-api.adaptable.app/solution",
        {
          language: formData.value.language,
          problem: problemStore.result,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      result.value = response.data.body.data;
    } catch (err: any) {
      error.value = err.response?.data?.message || "An error occured.";
    } finally {
      loading.value = false;
    }
  };

  return {
    formData,
    loading,
    error,
    result,
    submitForm,
  };
}
