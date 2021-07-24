import { createApp } from "vue";
import SwiperCore, { Navigation } from "swiper/core";
import App from "./App.vue";
import router from "./router";

SwiperCore.use([Navigation]);
createApp(App).use(router).mount("#app");
