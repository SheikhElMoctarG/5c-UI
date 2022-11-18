<template>
  <!-- the container -->
  <div class="container mx-auto max-w-sm">
    <!-- nav bar -->
    <navbar/>
    <!-- content -->
    <home-content/>
    <!-- footer -->
    <footer1/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import HomeContent from '../components/home-content.vue';
import Footer from '../components/footer.vue';
import Footer1 from '../components/footer.vue';

export default {
  components: { Navbar, HomeContent, Footer, Footer1 },
  name:'IndexPage'
}
</script>

<style>
body {
  direction: rtl;
  font-family: 'cairo';
}
</style>
