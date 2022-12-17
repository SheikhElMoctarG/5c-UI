<template>
  <!-- the container -->

  <div>
    <!-- content -->
    <home-content/>
    <!-- footer -->
    <footer1/>
  </div>
    
</template>

<script>
  
import HomeContent from '../components/home-content.vue';
import Footer1 from '../components/footer.vue';

export default {
  components: { HomeContent, Footer1 },
  name:'IndexPage'
}
</script>

<style>

</style>