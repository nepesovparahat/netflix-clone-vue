<template>
  <div class="content">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/shared/Header.vue";
export default {
  components: { HeaderComponent },
  setup() {
    return {};
  },
};
</script>

<style></style>
