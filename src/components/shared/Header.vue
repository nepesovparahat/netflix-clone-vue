<template>
  <header class="header">
    <div class="header__wrapper">
      <nav class="header__menu">
        <img src="@/assets/images/netflix.svg" alt="header-logo" />
        <router-link to="/" class="header__link">Home</router-link>
        <router-link to="/tv" class="header__link">TV Shows</router-link>
        <router-link to="/movies" class="header__link">Movies</router-link>
        <router-link to="/latest" class="header__link">Latest</router-link>
      </nav>
      <div class="header__options-container">
        <div class="header__search-box">
          <label class="header__search-content">
            <img
              src="@/assets/images/search.svg"
              alt="svg-icon"
              class="header__search-icon"
            />
            <input
              type="text"
              class="header__search-input"
              placeholder="Titles, people, genres"
            />
          </label>
        </div>
        <span class="header__kid">KID</span>
        <img
          src="@/assets/images/vector.svg"
          alt="vector-icon"
          class="header__vector-icon"
        />
        <div class="header__account">
          <div class="header__profile-avatar" />
          <img
            src="@/assets/images/polygon.svg"
            alt="avatar-icon"
            class="header__options-icon"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const isScroll = ref(false);
    function handleScroll() {
      let scroll = !isScroll.value ? "header" : "header__nav-bg";
      return scroll;
    }
    onMounted(() => {
      handleScroll();
    });
    console.log(isScroll.value);
    return {};
  },
};
</script>

<style lang="scss">
.header {
  z-index: z-index(first);
  position: relative;
  &__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 20px 0 10px;
    justify-content: space-between;
    min-height: 70px;
    background-color: #292626;
  }

  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0.1;
  }

  &__link {
    text-decoration: none;
    color: $white;
    @include font-size(18);
    margin: 0;
    padding: 0;
  }
  &--bg {
    background-color: #ddd;
  }

  &__search-box {
    width: 300px;
    height: 25px;
  }

  &__search-content {
    display: flex;
    flex-direction: row;
    float: right;
    justify-content: flex-end;

    &:focus-within {
      border: 1px solid #ddd;
      background-color: transparent;
    }
  }
  &__search-icon {
    cursor: pointer;
  }

  &__search-input {
    width: 0;
    border: none;
    outline: none;
    opacity: 0;
    background-color: transparent;
    @include font-size(16);
    transition: ease width 1s, ease opacity 1s;
    float: right;
    color: $white;

    &:focus {
      width: 250px;
      opacity: 1;
    }
  }

  &__options-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0.05;
    color: $white;
    cursor: pointer;
  }

  &__account {
    display: flex;
    align-items: center;
  }
  &__profile-avatar {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
    border-radius: 0.25rem;
    background-color: #f1c40f;
  }
  &__arrow {
    padding: 0.25rem;
  }
}
</style>
