import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { __main__ } from "@/leet-code";

const app = createApp(App);

app.use(router);

app.mount("#app");

__main__();
