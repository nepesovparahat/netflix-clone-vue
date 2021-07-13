<template>
  <div class="carousel">
    <button class="carousel__slide-btn back">⟨</button>
    <div
      class="carousel__rows"
      v-for="movie in trendingMoviesData"
      :key="movie.id"
    >
      <div class="carousel__posters">
        <img
          :src="baseImgUrl + movie.poster_path"
          alt="image"
          class="carousel__poster-img"
        />
      </div>
    </div>
    <button class="carousel__slide-btn next">⟩</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import tmdbAPI from "@/services/tmdbAPI";
import env from "@/env";
export default {
  setup() {
    let baseImgUrl = ref("https://image.tmdb.org/t/p/w500");
    let trendingMoviesData = ref([]);

    async function fetchTrendMovie() {
      const movieData = await axios
        .get(`${tmdbAPI}/trending/movie/week?api_key=${env.apiKey}`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
      trendingMoviesData.value = movieData;
      console.log(trendingMoviesData.value);
    }
    onMounted(() => {
      fetchTrendMovie();
    });
    return { baseImgUrl, trendingMoviesData };
  },
};
</script>
<style lang="scss">
.carousel {
  display: flex;
  flex-direction: row;
  &_rows {
    display: flex;
    justify-self: center;
  }
  &__posters {
    width: 220px;
    height: 320px;
  }
  &:hover {
    .carousel__slide-btn {
      display: flex;
    }
  }
  &__poster-img {
    object-fit: contain;
    width: 100%;
    max-height: 300px;
  }
  &__slide-btn {
    width: 50px;
    height: 300px;
    display: none;
    align-items: center;
    @include font-size(70);
    position: absolute;
    background-color: rgba(139, 138, 137, 0.226);
    color: $white;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .back {
    left: 0;
  }
  .next {
    right: 0;
  }
}
</style>
