import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";
import "lib-flexible";
import router from "./router";

createApp(App).use(router).mount("#app");
