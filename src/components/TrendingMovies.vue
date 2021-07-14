<template>
  <div class="carousel">
    <button
      class="carousel__slide-btn back"
      v-if="isActive"
      @click="distanceLeft"
    >
      ⟨
    </button>
    <div class="carousel__wrapper" ref="carouselList">
      <div
        class="carousel__item"
        v-for="movie in trendingMoviesData"
        :key="movie.id"
      >
        <div class="carousel__poster">
          <img
            :src="baseImgUrl + movie.poster_path"
            alt="image"
            class="carousel__poster-img"
          />
        </div>
      </div>
    </div>
    <button
      class="carousel__slide-btn next"
      v-if="!isActive"
      @click="distanceRight"
    >
      ⟩
    </button>
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
    let carouselList = ref("");
    let isActive = ref(false);

    async function fetchTrendMovie() {
      const movieData = await axios
        .get(
          `${tmdbAPI}/discover/tv?api_key=${env.apiKey}&sort_by=popularity.desc&page=1&with_networks=213`
        )
        .then((res) => res.data.results.reverse())
        .catch((error) => console.log(error));
      trendingMoviesData.value = movieData;
    }
    function distanceLeft() {
      let distance = carouselList.value.getBoundingClientRect().x - 50;
      carouselList.value.style.transform = `translateX(${distance + 1470}px)`;
      if (distance >= -1470) isActive.value = false;
    }
    function distanceRight() {
      let distance = carouselList.value.getBoundingClientRect().x - 50;
      carouselList.value.style.transform = `translateX(${distance - 1470}px)`;
      if (distance <= -2940) isActive.value = true;
      console.log(`distance`, distance);
    }
    onMounted(() => {
      fetchTrendMovie();
    });
    return {
      distanceLeft,
      distanceRight,
      isActive,
      carouselList,
      baseImgUrl,
      trendingMoviesData,
    };
  },
};
</script>
<style lang="scss">
.carousel {
  overflow: hidden;
  position: relative;
  margin: 0 50px 20px 50px;
  &__wrapper {
    display: flex;
    flex-direction: row;
    width: max-content;
    z-index: z-index(popup);
    transform: translateX(0);
    transition: 0.5s ease;
  }
  &__item {
    display: flex;
    justify-self: center;
  }
  &__poster {
    width: 250px;
    height: 280px;
    margin-right: 45px;
  }
  &:hover {
    .carousel__slide-btn {
      display: flex;
    }
  }
  &__poster-img {
    object-fit: cover;
    width: 100%;
    max-height: 280px;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }

  &__slide-btn {
    width: 50px;
    height: 280px;
    display: none;
    align-items: center;
    justify-content: center;
    @include font-size(70);
    position: absolute;
    background-color: rgba($color: #5555550c, $alpha: 0.4);
    color: $white;
    outline: none;
    border: none;
    top: 0;
    bottom: 0;
    cursor: pointer;
    z-index: z-index(popup);
  }
  .back {
    left: 0;
  }
  .next {
    right: 0;
  }
}
</style>
