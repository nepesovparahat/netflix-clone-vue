<template>
  <div class="home">
    <ViewSection />
    <div class="home__moviecarousel">
      <MovieCarousel title="Netflix Originals" :fetchUrl="requests.fetchOrginals"/>
      <MovieCarousel title="Trending Now" :fetchUrl="requests.fetchTrending"/>
      <MovieCarousel title="Top Rated" :fetchUrl="requests.fetchToprated" />
      <MovieCarousel title="Action Movies" :fetchUrl="requests.fetchActions" />
    </div>
  </div>
</template>

<script>
import requests from "@/services/MovieService";
import MovieCarousel from "@/components/shared/MovieCarousel.vue";
import ViewSection from "@/components/shared/ViewsSection.vue";
export default {
  name: "Home",
  components: {
    MovieCarousel,
    ViewSection,
  },
  setup() {
    return { requests };
  },
};
</script>

<style lang="scss"></style>
