import { defineStore } from "pinia";

//TODO define user object and its types
export const useUserStore = defineStore("User", {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    login(user) {
      this.user = user;
      localStorage.setItem("userToken", user.token || "");
    },
    logout() {
      this.user = null;
      localStorage.removeItem("userToken");
    },
  },
});