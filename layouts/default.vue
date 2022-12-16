<template>
  <div class="container mx-auto max-w-md">
    <navbar/>
    <Nuxt/>
    <Footer v-if="currentURL != aboutUrl"/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Myfooter from "../components/footer.vue"
export default {
  components: { Navbar , Myfooter},
  data(){
    return{
      currentURL: window.location.href,
      aboutUrl: process.env.URL + "/about"
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap');
body {
  direction: rtl;
  font-family: Cairo;
}
@font-face{
  font-family: Cairo;
  src: url('../fonts/Cairo.ttf') format('truetype');
}
</style>