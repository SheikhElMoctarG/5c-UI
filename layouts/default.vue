<template>
  <div class="container mx-auto max-w-sm">
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
  font-family: 'cairo';
}
</style>