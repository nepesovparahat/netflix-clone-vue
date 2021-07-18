<template>
  <div class="home">
    <Hero :params="paramsUrl[0]" />
    <div class="home__carousel">
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
      { typedName: "movie", title: "Trending Now", genres: 28 },
      { typedName: "movie", title: "Comedy", genres: 35 },
      { typedName: "movie", title: "Horror", genres: 27 },
      { typedName: "tv", title: "Top Rated", genres: 35 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
