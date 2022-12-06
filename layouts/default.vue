<template>
  <div class="container mx-auto max-w-sm font-cairo">
    <navbar/>
    <Nuxt/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style>
body {
  direction: rtl;
}
@font-face{
  font-family: 'Cairo';
  src: url('../fonts/Cairo.ttf') format('truetype');
}
</style>