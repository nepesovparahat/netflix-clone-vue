import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home/Home.vue';
import Movies from '../views/movies/Movies.vue';
import TVShows from '../views/tvShow/TVShows.vue';
import Latest from '../views/latest/Latest.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies
    },
    {
        path: '/tv',
        name: 'TVShows',
        component: TVShows
    },
    {
        path: '/latest',
        name: 'Latest',
        component: Latest
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

