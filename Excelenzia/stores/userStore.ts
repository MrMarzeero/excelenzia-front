import { defineStore } from "pinia";
import type { User } from "../types";

//TODO define user object and its types
export const useUserStore = defineStore("User", {
  state: () => ({
    isLogged: false,
    user: null as User | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    login(user: User, token: string) {
      this.user = user;
      this.isLogged = true;
    },
    logout() {
      this.user = null;
      this.isLogged = false;
    },
  },
});
