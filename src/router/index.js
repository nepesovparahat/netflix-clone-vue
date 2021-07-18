import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/Home.vue";
import Movies from "../views/movies/Movies.vue";
import TVShows from "../views/tvShow/TVShows.vue";
import Latest from "../views/latest/Latest.vue";
import MovieDetail from "@/components/shared/MovieDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/tv",
    name: "TVShows",
    component: TVShows,
  },
  {
    path: "/latest",
    name: "Latest",
    component: Latest,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
