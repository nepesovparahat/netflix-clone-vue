<template>
  <div class="home">
    home
    <h2>Netflix Orginals</h2>
    <div class="home__posters" v-for="mov in movie.value" :key="mov.id">
      <img
        :src="apiImgUrl + mov.poster_path"
        :alt="mov.name"
        style="height: 300px"
        class="home_posters-img"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, reactive } from "vue";
export default {
  setup() {
    let movie = reactive({});
    let apiImgUrl = ref("http://image.tmdb.org/t/p/w500");
    const API =
      "https://api.themoviedb.org/4/discover/tv?api_key=50c79094310c91407e637dc17af4ce13&sort_by=popularity.desc&page=1&with_networks=213";
    async function fetchMovieData() {
      const apiData = await axios
        .get(API)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
      movie.value = apiData;
      console.table(movie.value);
    }
    onMounted(() => {
      fetchMovieData();
    });
    return { fetchMovieData, movie, apiImgUrl };
  },
};
</script>

<style lang="scss"></style>
