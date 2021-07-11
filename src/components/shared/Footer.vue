<template> 
<footer>
   <div class="footer">
        <div class="footer__link-container">
        <a href="#" class="footer__link">
            <img src="@/assets/images/netflix.svg" alt="header-logo" class="footer__logo"/>
        </a>
        <a href="#" class="footer__link">Questions? Ask us</a>
        <a href="#" class="footer__link">Frequently Asked Questions</a>
        <a href="#" class="footer__link">Help Center</a></div>
    <div class="footer__link-container">
        <a href="#" class="footer__link">Media Center</a>
        <a href="#" class="footer__link">Investors</a>
        <a href="#" class="footer__link">Relations</a>
        <a href="#" class="footer__link">Ways to watch</a></div>
    <div class="footer__link-container">
        <a href="#" class="footer__link">Terms of use</a>
        <a href="#" class="footer__link">Privacy Cookie</a>
        <a href="#" class="footer__link">Preferences</a>
        <a href="#" class="footer__link">Corparate Information</a></div>
    <div class="footer__link-container">
        <a href="#" class="footer__link">Contact us</a>
        <a href="#" class="footer__link">Speed test</a>
        <a href="#" class="footer__link">Legal notices</a>
        <a href="#" class="footer__link">Orginals</a></div>
   </div>
   <p class="footer__copyright">2021 Netflix all rights reserverd.</p>
    </footer>
</template>

<script>
export default {

}
</script>

 <style lang="scss">
 footer{
    background-color:$black;
 }
  .footer{
    display: grid;
    grid-gap: 20px;
    padding: 50px 50px 0;
    grid-auto-columns: 50px;
    grid-template-columns: repeat(4, 1fr);

    @include mq(tablet){
        grid-template-columns: repeat(2, 1fr);
    }

    &__link-container{
    display: grid;
    grid-gap: 10px;
    justify-self: center;
    grid-template-columns: repeat(1, 1fr); 
    @include font-size(16);
    }

    &__link{
        text-decoration: none;
        color: $white;
    }

    &__copyright{
        text-align: center;
        color: $white;
        padding: 30px;
    }


  }  
</style>>