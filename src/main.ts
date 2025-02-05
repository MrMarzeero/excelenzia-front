import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { useUserStore } from "./stores/userStore";
import "katex/dist/katex.min.css";

import "highlight.js/styles/github-dark.css";
import cpp from "highlight.js/lib/languages/cpp";
import hljs from "highlight.js";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("cpp", cpp);

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

//TODO: remember to remove mock authentication
const userStore = useUserStore();
userStore.login({
  email: "test@example.com",
  id: "123",
  username: "Otávio vitor",
});

import router from "./router";
app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
