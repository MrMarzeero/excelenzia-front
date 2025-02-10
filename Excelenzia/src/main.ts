import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "highlight.js/styles/github-dark.css";
import cpp from "highlight.js/lib/languages/cpp";
import hljs from "highlight.js";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("cpp", cpp);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin);

app.mount('#app')
