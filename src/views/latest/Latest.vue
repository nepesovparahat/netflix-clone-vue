<template>
  <div class="latest">
    <Hero :params="paramsUrl[0]" />
    <div class="latest__movie-swiper">
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
  name:"Latest",
  components: {
    MovieSwiper,
    Hero,
  },
  setup() {
    let paramsUrl = [
      { title: "Family", genres: 10751 },
      { title: "Fantasy", genres: 14 },
      { title: "History", genres: 36 },
      { title: "Western", genres: 37 },
    ];
    return { paramsUrl };
  },
};
</script>

<style lang="scss"></style>
