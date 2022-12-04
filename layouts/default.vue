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
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');

body {
  direction: rtl;
}
</style>