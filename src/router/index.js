import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import MoviesComponent from '../views/movies/Movies.vue';
import TVComponent from '../views/tv/TV.vue';
import LatestComponent from '../views/latest/Latest.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/movies',
        name: 'Movies',
        component: MoviesComponent
    },
    {
        path: '/tv',
        name: 'TV',
        component: TVComponent
    },
    {
        path: '/latest',
        name: 'Latest',
        component: LatestComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

