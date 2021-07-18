<template>
  <div class="movie">
    <Hero :params="paramsUrl[0]" />
    <div class="movie__carousel">
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
      { typedName: "tv", title: "Adventure", genres: 12 },
      { typedName: "tv", title: "Crime", genres: 80 },
      { typedName: "tv", title: "Music", genres: 10402 },
      { typedName: "tv", title: "War", genres: 10752 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
