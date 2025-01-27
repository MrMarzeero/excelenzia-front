import { defineStore } from "pinia";

export const useProblemStore = defineStore("problemStore", {
  state: () => ({
    result: null,
    loading: false,
  }),
  actions: {
    setResult(newResult) {
      this.result = newResult;
    },
    setLoadingState(state) {
      this.loading = state;
    },
  },
});