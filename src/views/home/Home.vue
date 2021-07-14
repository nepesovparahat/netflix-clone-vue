<template>
  <div class="home">
    <div class="home__movie-info">
      <div class="home__movie_desc">
        <h3 class="home__desc-title">Black Widow</h3>
        <span class="home__desc-text"
          >Natasha Romanoff, also known as Black Widow, confronts the darker
          parts of her ledger when a dangerous conspiracy with ties to her past
          arises. Pursued by a force that will stop at nothing to bring her
          down, Natasha must deal with her history as a spy and the broken
          relationships left in her wake long before she became an
          Avenger.</span
        >
        <div class="home__movie-btn-box">
          <button class="home__movie-btn">
            <img
              src="@/assets/images/play.svg"
              alt="play-icon"
              class="home__btn-icon"
            />
            Play
          </button>
          <button class="home__movie-btn home__movie-btn--info">
            <img
              src="@/assets/images/info.svg"
              alt="more-icon"
              class="home__btn-icon"
            />
            More Info
          </button>
        </div>
      </div>
    </div>
    <h2 class="home__movie-title">Netflix Orginals</h2>
    <div class="home__movie-list-trend">
      <TrendingMovies :movieData="movieData" />
    </div>
  </div>
</template>

<script>
import TrendingMovies from "@/components/TrendingMovies.vue";
export default {
  name: "Home",
  components: {
    TrendingMovies,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.home {
  &__movie-info {
    height: 680px;
    background-image: url("https://image.tmdb.org/t/p/original//qAZ0pzat24kLdO3o8ejmbLxyOac.jpg");
    background-position: center center;
    background-repeat: no-repeat;
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
  }
  &__movie-btn-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    width: 300px;
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
  }
  &__btn-icon {
    margin-right: 10px;
  }
  &__movie-title {
    margin-left: 50px;
  }
}
</style>
