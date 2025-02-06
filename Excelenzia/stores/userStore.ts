import { defineStore } from "pinia";
import { User } from "../types";

//TODO define user object and its types
export const useUserStore = defineStore("User", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    login(user: User) {
      this.user = user;
      localStorage.setItem("userToken", user.token || "");
    },
    logout() {
      this.user = null;
      localStorage.removeItem("userToken");
    },
  },
});
