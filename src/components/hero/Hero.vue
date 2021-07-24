<template>
  <div class="hero">
    <div class="hero__movie-info" :style="{'background-image': 'url(' + baseImgUrl + heroData.poster_path + ')'}">
      <div class="hero__movie_desc">
        <h2 class="hero__desc-title">{{ heroData.title || heroData.name}}</h2>
        <p class="hero__desc-text">{{ heroData.overview }}</p>
        <div class="hero__movie-btn-box">
          <button class="hero__movie-btn">
            <img
              src="@/assets/images/play.svg"
              alt="play-icon"
              class="hero__btn-icon"
            />
            Play
          </button>
          <button class="hero__movie-btn hero__movie-btn--info">
            <img
              src="@/assets/images/info.svg"
              alt="more-icon"
              class="hero__btn-icon"
            />
            More Info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  props: ["params"],

  setup(props) {
    const apiKey = import.meta.env.VITE_KEY;
    let baseImgUrl = ref("https://image.tmdb.org/t/p/original/");
    const baseUrl = "https://api.themoviedb.org/3";
    let heroData = ref([]);

    async function fetchTrendMovie() {
      const movieData = await axios
        .get(
          `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${props.params.genres}`
        )
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
      heroData.value = movieData[Math.floor(Math.random() * 10)];
    }

    onMounted(() => {
      fetchTrendMovie();
    });

    return { baseImgUrl, heroData };
  },
};
</script>

<style lang="scss">
.hero {
  &__movie-info {
    height: 700px;
    background-size: cover;
  }

  &__movie_desc {
    margin: 0 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 600px;
    max-width: 650px;
    flex-direction: column;
    color: $white;
    padding: 10px;
    @include font-size(22);
    font-weight: bold;
    @include mq(tablet) {
      margin:0 40px;
      @include font-size(18);
    }
  }

  &__movie-btn-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    width: 300px;
    @include mq(tablet){
      width: 270px;
    }
  }

  &__movie-btn {
    width: 140px;
    height: 40px;
    background-color: $white;
    color: $black;
    @include font-size(16);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    outline: none;
    border: none;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    &--info {
      background-color: rgba(133, 133, 133, 0.7);
      color: $white;
    }
    @include mq(tablet){
      @include font-size(14);
      width: 120px;
    }
  }

  &__btn-icon {
    margin-right: 10px;
  }

  &__movie-title {
    margin-left: 50px;
  }
}
</style>
