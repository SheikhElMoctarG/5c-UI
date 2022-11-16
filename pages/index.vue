<template>
  <!-- the container -->
  <div class="container mx-auto max-w-sm">
    <!-- nav bar -->
    <navbar/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
  components: { Navbar },
  name: 'IndexPage'
}
</script>

<style>
body {
  direction: rtl;
  font-family: 'cairo';
}
</style>
