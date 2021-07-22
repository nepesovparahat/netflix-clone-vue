<template>
  <div class="movie-detail">
    <div
      class="movie-detail__container"
      :style="{ 'background-image': 'url(' + baseImgUrl + backdrop + ')' }"
    >
      <div class="movie-detail__content">
        <div class="movie-detail__info">
          <div
            class="movie-detail__box"
            :style="{
              'background-image': 'url(' + baseImgUrl + backdrop + ')',
            }"
          >
            <div class="movie-detail__title-box">
              <div class="movie-detail__title">
                {{ title }}
              </div>
            </div>
            <div class="movie-detail__extra-info">
              <div class="movie-detail__info-description">
                <div class="movie-detail__release-date">{{ releaseDate }}</div>
                <div
                  :class="[
                    { 'movie-detail__vote-avarage--active': voteActive },
                    'movie-detail__vote-avarage',
                  ]"
                >
                  {{ voteAvarage }}% Match
                </div>
              </div>
              <div class="movie-detail__info-description">
                <div class="movie-detail__duration-runtime">{{ runtime }}</div>
              </div>
            </div>
            <div class="movie-detail__overview">
              <p class="movie-detail__overview-text">{{ overview }}</p>
            </div>
            <div class="movie-detail__info-description">
              <div class="movie-detail__genre-content">
                <span class="movie-detail__genre-title">Genres:</span>
                <span
                  class="movie-detail__genre-text"
                  v-for="genre in genres"
                  :key="genre.id"
                >
                  {{ genre.name }}
                </span>
              </div>
            </div>
            <button @click="showModal" class="movie-detail__play-btn">
              <img
                src="@/assets/images/play.svg"
                alt="play-icon"
                class="hero__btn-icon"
              />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <div v-if="activeModal && trailerId" class="movie-detail__watch-box">
        <button @click="hideModal" class="movie-detail__watch-close-btn">
          ×
        </button>
        <iframe
          width="850"
          height="750"
          class="movie-detail__iframe-watch"
          :src="`https://www.youtube.com/embed/${trailerId}?autoplay=1`"
          allow="autoplay"
        >
        </iframe>
      </div>
    </div>
    <div v-if="casts.length > 0" class="movie-detail__casts">
      <div class="movie-detail__casts-title">Casts</div>
      <div class="movie-detail__casts-box">
        <div
          class="movie-detail__cast-info"
          v-for="cast in casts"
          :key="cast.id"
        >
          <img
            v-if="cast.profile_path"
            class="movie-detail__cast-img"
            :src="baseImgUrl + cast.profile_path"
          />
          <div v-if="cast.profile_path" class="movie-detail__cast-name">
            {{ cast.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "MovieDetail",
  setup() {
    const apiKey = import.meta.env.VITE_KEY;
    const movieDetail = ref([]);
    const movieId = useRoute();
    let activeModal = ref(false);
    let backdrop = ref("");
    let poster = ref("");
    let overview = ref();
    let title = ref("");
    let runtime = ref("");
    let genres = ref([]);
    let trailerId = ref("");
    let casts = ref([]);
    let voteAvarage = ref(0);
    let releaseDate = ref("");
    let playerVars = ref({ autoplay: 1 });
    let voteActive = ref(false);
    let baseImgUrl = ref("https://image.tmdb.org/t/p/original");
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
        .get(`${baseUrl}/movie/${movieId.params.id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits,release_dates,similar,images`)
        .then((res) => res.data)
        .catch((error) => console.log(error));

      movieDetail.value = detailData;
      title.value = movieDetail.value.original_title;
      overview.value = movieDetail.value.overview;
      poster.value = movieDetail.value.poster_path;
      backdrop.value = movieDetail.value.backdrop_path;
      voteAvarage.value = voteAvarageFormat(movieDetail.value.vote_average);

      movieDetail.value.credits.cast.forEach((cast) => casts.value.push(cast));

      movieDetail.value.genres.forEach((item) => {
        if (item) return genres.value.push(item);
      });

      runtime.value = formatRuntime(movieDetail.value.runtime);

      releaseDate.value = formatDate(movieDetail.value.release_date);
      console.log(`movieDetail.value`, movieDetail.value);
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

    function voteAvarageFormat(value) {
      let voteAvarage = (value % 100) * 10;
      voteAvarage < 30 ? (voteActive.value = false) : (voteActive.value = true);

      return voteAvarage;
    }

    function showModal() {
      movieDetail.value.videos.results.filter((item) => {
        if (item.type === "Trailer") trailerId.value = item.key;
      });
      activeModal.value = true;
    }
    function hideModal() {
      activeModal.value = false;
    }
    onMounted(() => {
      fetctmovieDetail();
    });

    return {
      hideModal,
      showModal,
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
      voteActive,
      playerVars,
      trailerId,
      activeModal,
    };
  },
};
</script>

<style lang="scss">
.movie-detail {
  &__container {
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    background-image: rgba(0, 0, 0, 0.877);
  }
  &__title {
    font-weight: bold;
    @include font-size(32);
    @include mq(tablet) {
      @include font-size(22);
    }
  }

  &__watch-box {
    z-index: z-index(popup);
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    right: 300px;
    top: 150px;
    background: #000;
    @include mq(tablet) {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__iframe-watch {
    padding: 50px;
  }

  &__watch-close-btn {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 25px;
    right: 25px;
    border-radius: 50%;
    outline: none;
    border: 1px solid $white;
    cursor: pointer;
    background-color: transparent;
    color: $white;
    @include font-size(20);
  }

  &__content {
    height: 750px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__info {
    padding: 20px 100px;
    height: 500px;
    display: flex;
    @include mq(tablet) {
      padding: 70px 0;
      height: 650px;
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
    align-items: start;
    justify-content: start;
    flex-direction: column;
  }

  &__box {
    display: flex;
    width: 1300px;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    padding: 16px 50px;
    color: $white;
    background-size: 600px 100%;
    background-position: right top;
    background-repeat: no-repeat;
    border-radius: 25px;
    @include font-size(18);
    font-weight: 550;
    height: auto;
    @include mq(tablet) {
      background-size: 0;
    }
  }

  &__info-description {
    display: flex;
    flex-direction: row;
    font-weight: bold;
  }

  &__release-date {
    margin: 0 10px 15px 0;
  }

  &__vote-avarage {
    color: red;
    &--active {
      color: green;
    }
  }

  &__overview-text {
    width: 45%;
    @include mq(tablet) {
      width: 100%;
    }
  }

  &__genre-text {
    margin-right: 15px;
    font-weight: 300;
  }

  &__genre-title {
    margin-right: 15px;
  }

  &__genre-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @include font-size(20);
    font-weight: bolder;
  }

  &__subtitle {
    font-weight: bold;
    @include font-size(24);
    @include mq(tablet) {
      @include font-size(18);
    }
  }

  &__casts {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__casts-title {
    @include font-size(28);
    font-weight: bold;
  }
  &__cast-name {
    padding-top: 10px;
  }

  &__casts-box {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__cast-img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: fill;
    margin: 20px 20px 0;
  }
  &__cast-info {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &__play-btn {
    width: 140px;
    height: 40px;
    background-color: #a8a2a281;
    color: $white;
    @include font-size(14);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    outline: none;
    border: none;
    margin-top: 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
