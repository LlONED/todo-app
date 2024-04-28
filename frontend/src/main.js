import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

const UIComponents = import.meta.glob("./components/UI/**/*.vue", {
  eager: true,
});

Object.entries(UIComponents).forEach(([path, module]) => {
  app.component(path.split("/").at(-1).slice(0, -4), module.default);
});

app.use(createPinia());

app.mount("#app");
