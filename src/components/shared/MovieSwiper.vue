<template>
  <div class="movie-swiper">
    <h2 class="movie-swiper__title">{{ movieSwiperTitle }}</h2>
    <div class="movie-swiper__container">
        <swiper :navigation="true" :breakpoints="breakpoints">
 <swiper-slide class="movie-swiper__slide" v-for="movie in swiperMoviesData" :key="movie.id">
   <router-link :to="`/movie/${movie.id}`">
   <img :src="baseImgUrl + movie.backdrop_path" alt="backdrop-image"/>
    </router-link>
</swiper-slide>
</swiper>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.min.css"
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: "MovieSwiper",
  props: ["params"],
 components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const apiKey = import.meta.env.VITE_KEY;
    let movieSwiperTitle = props.params.title;
    let baseImgUrl = ref("https://image.tmdb.org/t/p/w500");
    const baseUrl = "https://api.themoviedb.org/3";
    let swiperMoviesData = ref([]);
    let swiperList = ref("");
    let breakpoints = {
"640": {
    "slidesPerView": 2,
    "spaceBetween": 20,
    "slidesPerGroup":2
  },
  "768": {
    "slidesPerView": 4,
    "spaceBetween": 40,
    "slidesPerGroup":4
  },
  "1024": {
    "slidesPerView": 5,
    "spaceBetween": 50,
    "slidesPerGroup":5
  }
    }
    async function fetchMovie() {
      const movieData = await axios
        .get(
          `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${props.params.genres}`
        )
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
      swiperMoviesData.value = movieData;
      console.log(`swiperMoviesData.value`, swiperMoviesData.value);
    }

    onMounted(() => {
      fetchMovie();

      console.log(`apiKey`, apiKey)
    });
    return {
      swiperList,
      baseImgUrl,
      swiperMoviesData,
      movieSwiperTitle,
      breakpoints
    };
  },
};
</script>
<style lang="scss">

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  align-items: center;
  transition: 250ms all;
  :hover{
    transition: .4s ease-in-out;
    transform: scale(1.1);
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie-swiper {
  &__title {
    margin: 20px 50px;
  }

  &__container {
    overflow: hidden;
    position: relative;
    margin: 0 50px 20px 50px;
  }
}
</style>
