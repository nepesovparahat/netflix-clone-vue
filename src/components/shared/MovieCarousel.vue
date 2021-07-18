<template>
  <div class="carousel">
    <h2 class="carousel__title">{{ carouselTitle }}</h2>
    <div class="carousel__container">
      <button class="carousel__slide-btn back" :disabled="backBtnActive" @click="distanceLeft">
        ⟨
      </button>
      <div class="carousel__wrapper" ref="carouselList">
        <div class="carousel__item" v-for="movie in carouselMoviesData" :key="movie.id">
          <div v-if="movie.backdrop_path" class="carousel__poster">
            <router-link :to="`/movie/${movie.id}`">
              <img :src="baseImgUrl + movie.backdrop_path" alt="image" class="carousel__poster-img"/>
            </router-link>
          </div>
        </div>
      </div>
      <button class="carousel__slide-btn next" :disabled="nextBtnActive" @click="distanceRight">
        ⟩
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import env from "@/env";
export default {
  props: ["params"],

  setup(props) {
    let carouselTitle = props.params.title;
    let baseImgUrl = ref("https://image.tmdb.org/t/p/w500");
    const baseUrl = "https://api.themoviedb.org/3";
    let carouselMoviesData = ref([]);
    let carouselList = ref("");
    let nextBtnActive = ref(false);
    let backBtnActive = ref(true);

    async function fetchMovie() {
      const movieData = await axios
        .get(
          `${baseUrl}/discover/${props.params.typedName}?api_key=${env.apiKey}&with_genres=${props.params.genres}`
        )
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
      carouselMoviesData.value = movieData;
      console.log(`carouselMoviesData.value`, carouselMoviesData.value);
    }

    function distanceLeft() {
      let distance = carouselList.value.getBoundingClientRect().x - 50;
      carouselList.value.style.transform = `translateX(${distance + 1470}px)`;
      if (distance >= -1470) {
        backBtnActive.value = true;
        nextBtnActive.value = false;
      }
    }

    function distanceRight() {
      backBtnActive.value = false;
      let distance = carouselList.value.getBoundingClientRect().x - 50;
      carouselList.value.style.transform = `translateX(${distance - 1470}px)`;
      if (distance <= -2940) {
        nextBtnActive.value = true;
      }
    }

    onMounted(() => {
      fetchMovie();
    });
    return {
      distanceLeft,
      distanceRight,
      nextBtnActive,
      backBtnActive,
      carouselList,
      baseImgUrl,
      carouselMoviesData,
      carouselTitle,
    };
  },
};
</script>
<style lang="scss">
.carousel {
  &__title {
    margin: 20px 50px;
  }

  &__container {
    overflow: hidden;
    position: relative;
    margin: 0 50px 20px 50px;
  }

  &__wrapper {
    display: flex;
    flex-direction: row;
    width: max-content;
    transform: translateX(0);
    transition: 0.5s ease;
  }

  &__poster {
    width: 250px;
    margin-right: 45px;
  }

  &:hover {
    .carousel__slide-btn {
      display: block;
    }
  }

  &__poster-img {
    object-fit: cover;
    width: 100%;
    max-height: 160px;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }

  &__slide-btn {
    width: 50px;
    height: 150px;
    display: none;
    align-items: center;
    justify-content: center;
    @include font-size(50);
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
