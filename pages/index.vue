<template>
  <!-- the container -->
  <div class="container mx-auto max-w-sm">
    <!-- nav bar -->
    <navbar/>
    <!-- content -->
    <home-content/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import HomeContent from '../components/home-content.vue';

export default {
  components: { Navbar, HomeContent },
  name:'IndexPage'
}
</script>

<style>
body {
  direction: rtl;
  font-family: 'cairo';
}
</style>
