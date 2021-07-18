<template>
  <div class="latest">
    <Hero :params="paramsUrl[0]" />
    <div class="latest__movie-carousel">
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
      { typedName: "movie", title: "Family", genres: 10751 },
      { typedName: "movie", title: "Fantasy", genres: 14 },
      { typedName: "movie", title: "History", genres: 36 },
      { typedName: "movie", title: "Romance", genres: 10749 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
