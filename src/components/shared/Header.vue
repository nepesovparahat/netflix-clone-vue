<template>
<header class="header">
    <div class="header__logo-box">
        <router-link to='/' class="header__logo">
        <img src="../../assets/images/Netflix-Logo.wine.svg" alt="header-logo">
        </router-link>
    </div>
    <nav class="header__menu">
        <router-link to = '/' class="header__link">Home</router-link>
        <router-link to ='/tv' class="header__link">TV Shows</router-link>
        <router-link to = '/movies' class="header__link">Movies</router-link>
        <router-link to = '/latest' class="header__link">Latest</router-link>
    </nav>
    <div class="header__options-container">
        <div class="header__search-box">
        <label class="header__search-content">
            <input type="text" class="header__search-input" placeholder="Titles, people, genres" />
        </label>
        <img src="../../assets/images/vector.svg" alt="vector-icon" class="header__vector-icon" />
        <a href="#" class="header__account">Account</a>
    </div>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
    display: flex;
    flex-direction: row;
    position: fixed;
    &__search{
        width: 250px;
        height: 25px;
    }
    &__search-input{
        width: 0px;
        height: 30px;
        border: none;
        background-image: url('../../assets/images/search.svg');
        background-position: 5px 5px;
        padding: 0px 10px 0px 30px;
        background-repeat: no-repeat;
        border-radius: 5px;
        padding: 5px 10px 5px 30px;
        @include font-size(14);
        transition: width .4s ease-in-out;
        &:focus{
            width: 220px;
            border: 1px solid #ddd;
        }
    }
    &__options-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
}
</style>