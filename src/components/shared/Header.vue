<template>
<header class="header">
   <div class="header__wrapper">
        <nav class="header__menu">
        <router-link to='/' class="header__logo">
        <img src="../../assets/images/netflix.svg" alt="header-logo">
        </router-link>
        <router-link to = '/' class="header__link">Home</router-link>
        <router-link to ='/tv' class="header__link">TV Shows</router-link>
        <router-link to = '/movies' class="header__link">Movies</router-link>
        <router-link to = '/latest' class="header__link">Latest</router-link>
    </nav>
    <div class="header__options-container">
        <div class="header__search-box">
        <label class="header__search-content">
            <img src="../../assets/images/search.svg" alt="svg-icon" class="header__search-icon">
            <input type="text" class="header__search-input" placeholder="Titles, people, genres" />
        </label></div>
        <span class="header__kid">KID</span>
        <img src="../../assets/images/vector.svg" alt="vector-icon" class="header__vector-icon" />
        <span class="header__account">Account</span>
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
    z-index:z-index(popup);
    &__wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    width: 100%;
    padding:0 20px;
    justify-content: space-between;
    min-height: 70px;
    background-color: #292626;
    }
    
    &__search-box{
        width: 300px;
        height: 25px;
    }

    &__search-content{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    &__search-input{
        width: 0;
        border: none;
        outline: none;
        opacity: 0;
        @include font-size(16);
        transition: ease width 1s, ease opacity 1s;
        border-radius: 5px;
        float: right;

        &:focus{
            width: 250px;
            opacity: 1;
        }
        
    }

    &__options-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-grow: 0.05;
        color:$white;
        cursor: pointer;
    }

    &__menu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-grow: 0.1;
       
    }

    &__link{
        text-decoration: none;
        color:$white;
        @include font-size(18);
    }

}
</style>