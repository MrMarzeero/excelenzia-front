import { ref } from "vue";
import axios, { AxiosError } from "axios";
import type { ProblemTemplate } from "../../types";
import { useProblemStore } from "../../stores/ProblemStore.ts";
import { useAxios } from "./useAxios";
import { getToken } from "../composables/auth";

export function useGenerateModel() {
  const formData = ref({
    context: '',
    topics: [], // Inicialize topics como um array vazio!
    level: 'Easy',
    language: 'Portuguese',
  });

  const { post } = useAxios();
  const loading = ref(false);
  const error = ref<AxiosError | null>(null);
  const result = ref<ProblemTemplate | null>(null);
  const problemStore = useProblemStore();

  const submitForm = async () => {
    loading.value = true;
    problemStore.setLoadingState(true);
    error.value = null;

    try {
      const token = getToken();
      const requestData = {
        language: formData.value.language,
        context: formData.value.context,
        topics: formData.value.topics,
        level: formData.value.level,
      }
      const response = await post(
        "/cp/problem/", requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      result.value = response.data;
      console.log(response.data);
      problemStore.setLoadingState(false);
      if (result.value) problemStore.setResult(result.value);
    } catch (err: any) {
      console.error(err);
      error.value = err.response?.data?.message || "An error occured.";
    } finally {
      loading.value = false;
      problemStore.setLoadingState(false);
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