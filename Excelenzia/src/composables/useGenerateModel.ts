import { ref } from "vue";
import axios, { AxiosError } from "axios";
import type { ProblemTemplate } from "../../types";
import { useProblemStore } from "../../stores/ProblemStore.ts";

export function useGenerateModel() {
  const formData = ref({
    context: "",
    topics: "",
    level: "Easy",
    language: "Portuguese",
  });

  const loading = ref(false);
  const error = ref<AxiosError | null>(null);
  const result = ref<ProblemTemplate | null>(null);
  const problemStore = useProblemStore();

  const submitForm = async () => {
    loading.value = true;
    problemStore.setLoadingState(true);
    error.value = null;

    try {
      const response = await axios.post(
        "https://dreamcode-api.adaptable.app/problem",
        {
          language: formData.value.language,
          context: formData.value.context,
          topics: formData.value.topics.split(","),
          level: formData.value.level,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result.value = response.data.body.data;
      problemStore.setLoadingState(false);
      if (result.value) problemStore.setResult(result.value);
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