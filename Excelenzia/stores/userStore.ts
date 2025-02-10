import { defineStore } from "pinia";
import type { User } from "../types";

//TODO define user object and its types
export const useUserStore = defineStore("User", {
  state: () => ({
    isLogged: false,
    token: null as string | null,
    user: null as User | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    login(user: User) {
      this.user = user;
    },
    get_token() {
      return this.token;
    },
    logout() {
      this.user = null;
      localStorage.removeItem("userToken");
    },
  },
});
