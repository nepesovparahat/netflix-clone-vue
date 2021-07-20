import { createApp } from "vue";
import Main from "./Main.vue";
import router from "./router";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);
createApp(Main).use(router).mount("[app]");
