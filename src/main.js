import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import AppHeader from "@/components/common/AppHeader.vue";
import appBookmarkList from "@/components/common/appBookmarkList";

const app = createApp(App);
app.component("app-header", AppHeader);
app.component("app-bookmark-list", appBookmarkList);

//
app.use(router);
app.mount("#app");
