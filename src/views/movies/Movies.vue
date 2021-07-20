<template>
  <div class="movie">
    <Hero :params="paramsUrl[0]" />
    <div class="movie__swiper">
      <MovieSwiper
        :params="params"
        v-for="params in paramsUrl"
        :key="params.id"
      />
    </div>
  </div>
</template>

<script>
import MovieSwiper from "@/components/swiper/MovieSwiper.vue";
import Hero from "@/components/hero/Hero.vue";
export default {
  name: "Movies",
  components: {
    MovieSwiper,
    Hero,
  },
  setup() {
    let paramsUrl = [
      { title: "Adventure", genres: 12 },
      { title: "Animation", genres: 16 },
      { title: "Music", genres: 10402 },
      { title: "War", genres: 10752 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
