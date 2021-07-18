<template>
  <div class="tv">
    <Hero :params="paramsUrl[0]" />
    <div class="tv_movie-carousel">
      <MovieCarousel
        :params="params"
        v-for="params in paramsUrl"
        :key="params.id"
      />
    </div>
  </div>
</template>

<script>
import MovieCarousel from "@/components/shared/MovieCarousel.vue";
import Hero from "@/components/shared/Hero.vue";
export default {
  name: "Home",
  components: {
    MovieCarousel,
    Hero,
  },
  setup() {
    let paramsUrl = [
      { typedName: "tv", title: "Action & Adventure", genres: 10759 },
      { typedName: "tv", title: "Documentary", genres: 99 },
      { typedName: "tv", title: "Drama", genres: 18 },
      { typedName: "tv", title: "News", genres: 10763 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
