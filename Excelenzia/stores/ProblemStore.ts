import { defineStore } from "pinia";
import type { ProblemTemplate } from '../types';

export const useProblemStore = defineStore("problemStore", {
  state: () => ({
    result: null as ProblemTemplate | null,
    loading: false,
  }),
  actions: {
    setResult(newResult: ProblemTemplate) {
      this.result = newResult;
    },
    setLoadingState(state: boolean) {
      this.loading = state;
    },
  },
});
