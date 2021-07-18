<template>
  <div class="movie-detail" :style="{ 'background-image': 'url(' + baseImgUrl + backdrop + ')' }">
    <div class="movie-detail__container">
      <div class="movie-detail__info">
        <div class="movie-detail__box" :style="{ 'background-image': 'url(' + baseImgUrl + poster + ')' }">
          <div class="movie-detail__title-box">
            <div class="movie-detail__title">
              {{ title }}
            </div>
          </div>
          <div class="movie-detail__extra-info">
            <div class="movie-detail__info-description">
              <div class="movie-detail__subtitle">Release Date</div>
              <div class="movie-detail-release-date">{{ releaseDate }}</div>
            </div>
            <div class="movie-detail__info-description">
              <div class="movie-detail__subtitle">Duration</div>
              <div class="movie-detail__duration-runtime">{{ runtime }}</div>
            </div>
            <div class="movie-detail__info-description">
              <div class="movie-detail__subtitle">Genre</div>
              <div class="movie-detail__genre-content">
                <span class="movie-detail__genre-text" v-for="genre in genres" :key="genre.id" >
                  {{ genre.name }}
                  </span>
              </div>
            </div>
            <div class="movie-detail__trailer">
              <div v-if="trailerId" @click="show" class="detail-content">
                <i class="fas fa-play"></i> Play Trailer
              </div>
            </div>
          </div>
          <div class="movie-detail__overview">
            <div class="movie-detail__subtitle">Overview</div>
            <p class="movie-detail__overview-text">{{ overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
import axios from "axios";
export default {
  setup() {
    const movieDetail = ref([]);
    const movieId = useRoute();
    let backdrop = ref("");
    let poster = ref("");
    let overview = ref();
    let title = ref("");
    let runtime = ref("");
    let genres = ref([]);
    let casts = ref([]);
    let voteAvarage = ref(0);
    let releaseDate = ref("");
    let baseImgUrl = ref("https://image.tmdb.org/t/p/original/");
    const baseUrl = "https://api.themoviedb.org/3";
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    async function fetctmovieDetail() {
      const detailData = await axios
        .get(`${baseUrl}/movie/${movieId.params.id}?api_key=${env.apiKey}&language=en-US&append_to_response=videos,credits,release_dates,similar,images`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      movieDetail.value = detailData;
      title.value = movieDetail.value.original_title;
      overview.value = movieDetail.value.overview;
      poster.value = movieDetail.value.poster_path;
      backdrop.value = movieDetail.value.backdrop_path;
      voteAvarage.value = movieDetail.value.vote_average;

      movieDetail.value.credits.cast.forEach((cast) => casts.value.push(cast));

      movieDetail.value.genres.forEach((item) => {
        if (item) return genres.value.push(item);
      });

      runtime.value = formatRuntime(movieDetail.value.runtime);

      releaseDate.value = formatDate(movieDetail.value.release_date);
    }

    function formatRuntime(value) {
      let hour = Math.floor(parseInt(value) / 60);
      let minute = parseInt(value) % 60;
      return `${hour}hr ${minute}min`;
    }

    function formatDate(value) {
      let year = value.substring(0, 4);
      let month = monthNumToLetter(value.substring(5, 7));
      let date = value.substring(8, 10);
      return `${date} ${month} ${year}`;
    }

    function monthNumToLetter(value) {
      let month = months.filter(
        (item, index) => value === index + 1 || value === "0" + (index + 1)
      );
      return month;
    }

    onMounted(() => {
      fetctmovieDetail();
    });

    return {
      movieDetail,
      backdrop,
      poster,
      overview,
      title,
      runtime,
      genres,
      casts,
      voteAvarage,
      releaseDate,
      baseImgUrl,
    };
  },
};
</script>

<style lang="scss">
.movie-detail {
  &__title {
    font-weight: bold;
    @include font-size(32);
    @include mq(tablet) {
      @include font-size(22);
    }
  }

  background-size: cover;
  background-repeat: no-repeat;
  height: 700px;
  justify-content: center;

  &__container {
    height: 650px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__info {
    padding: 20px 100px;
    height: 450px;
    display: flex;
    @include mq(tablet) {
      padding: 20px 0;
      height: 550px;
    }
  }

  &__poster {
    height: 450px;
  }

  &__title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__extra-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__box {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
    padding: 16px 50px;
    color: $white;
    background-size: contain;
    background-position: 100%;
    background-repeat: no-repeat;
    border-radius: 25px;
    @include font-size(18);
    font-weight: 550;
    @include mq(tablet) {
      background-size: 0;
    }
  }

  &__info-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;
  }

  &__overview-text {
    width: 70%;
    @include mq(tablet) {
      width: 100%;
    }
  }

  &__genre-text {
    margin-right: 15px;
    white-space: nowrap;
    word-break: break-all;
  }

  &__subtitle {
    font-weight: bold;
    @include font-size(24);
    @include mq(tablet) {
      @include font-size(18);
    }
  }
}
</style>
