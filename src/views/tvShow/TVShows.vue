<template>
  <div class="tv">
    <Hero :params="paramsUrl[0]" />
    <div class="tv_movie-swiper">
      <MovieSwiper
        :params="params"
        v-for="params in paramsUrl"
        :key="params.id"
      />
    </div>
  </div>
</template>

<script>
import MovieSwiper from "@/components/shared/MovieSwiper.vue";
import Hero from "@/components/shared/Hero.vue";
export default {
  name: "TVShows",
  components: {
    MovieSwiper,
    Hero,
  },
  setup() {
    let paramsUrl = [
      { title: "Mystery", genres: 9648 },
      { title: "TV Movie", genres: 10770 },
      { title: "Drama", genres: 18 },
      { title: "News", genres: 10763 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
