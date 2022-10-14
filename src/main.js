import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import HeaderApp from "@/components/common/HeaderApp.vue";

const app = createApp(App);
app.component("header-app", HeaderApp);

//
app.use(router);
app.mount("#app");
