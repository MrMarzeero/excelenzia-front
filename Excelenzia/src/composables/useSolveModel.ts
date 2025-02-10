import { ref } from "vue";
import { AxiosError } from "axios";
import type { SolutionTemplate } from "../../types";
import { useProblemStore } from "../../stores/ProblemStore";
import { getToken } from "./auth";
import { useAxios } from "./useAxios";

export function useSolveModel() {
  const formData = ref({
    language: "cpp",
  });

  const loading = ref(false);
  const error = ref<AxiosError | null>(null);
  const result = ref<SolutionTemplate | null>(null);
  const problemStore = useProblemStore();
  const { get } = useAxios();

  const submitForm = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const token = getToken();
      if (!problemStore.result) {
        throw new Error("Problem not found.");
      }
      const response = await get(
        `cp/solution/${problemStore.result.id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      result.value = response;
    } catch (err: any) {
      console.error(err);
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
