<template>
  <header class="header">
    <div :class="[{ 'header__wrapper--bg': isScroll }, 'header__wrapper']">
     <router-link to="/">
       <img
        src="@/assets/images/netflix.svg"
        alt="header-logo"
        class="header__logo"
      />
     </router-link>
      <nav :class="[{ 'header__menu--active': isOpenMenu }, 'header__menu']">
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
      <button @click="toggleMenu" class="header__navbar-burger">
        <div class="header__burger-line"></div>
        <div class="header__burger-line"></div>
        <div class="header__burger-line"></div>
      </button>
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const isScroll = ref(false);
    let isOpenMenu = ref(false);

    function handleScroll() {
      let scroll =
        window.pageYOffset === 0
          ? (isScroll.value = false)
          : (isScroll.value = true);
      return scroll;
    }

    function toggleMenu() {
      isOpenMenu.value = !isOpenMenu.value;
    }

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { isScroll, isOpenMenu, toggleMenu };
  },
};
</script>

<style lang="scss">
.header {
  z-index: z-index(header);
  position: relative;
  font-weight: bold;
  &__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 40px 0 20px;
    justify-content: space-between;
    height: 70px;
    &--bg {
      background-color: #292626;
    }
  }
  &__logo {
    @include mq(tablet) {
      width: 80px;
    }
  }

  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @include mq(tablet) {
      display: none;
    }
    &--active {
      display: flex;
      float: none;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 300px;
      width: auto;
      overflow: hidden;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  &__link {
    white-space: nowrap;
    position: relative;
    text-decoration: none;
    text-align: center;
    color: $white;
    @include font-size(18);
    padding: 0 20px;
  }
  &--bg {
    background-color: #ddd;
  }

  &__search-box {
    width: 230px;
    height: 25px;
    @include mq(tablet) {
      width: 210px;
    }
    @include mq(mobile) {
      width: 190px;
    }
  }

  &__search-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    &:focus-within {
      border: 1px solid #ddd;
    }
  }
  &__search-icon {
    cursor: pointer;
  }

  &__search-input {
    background-color: transparent;
    width: 0;
    border: none;
    outline: none;
    opacity: 0;
    @include font-size(16);
    transition: ease width 1s, ease opacity 1s;
    float: right;
    color: $white;

    &:focus {
      width: 200px;
      opacity: 1;
      @include mq(tablet) {
        width: 180px;
      }
      @include mq(mobile) {
        width: 160px;
      }
    }
  }

  &__options-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0.1;
    color: $white;
    cursor: pointer;
    @include mq(tablet) {
      margin-right: 40px;
    }
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
  &__kid {
    @include mq(tablet) {
      display: none;
    }
  }
  &__vector-icon {
    @include mq(tablet) {
      display: none;
    }
  }
  //navbar-burger
  &__navbar-burger {
    display: none;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    @include mq(tablet) {
      display: block;
    }
  }
  &__navbar-burger {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  &__burger-line {
    width: 30px;
    height: 5px;
    background: #ffff;
    margin: 5px;
    border-radius: 3px;
  }
}
</style>
