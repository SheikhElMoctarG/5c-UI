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
  name:'IndexPage',
  head: {
    title: "الرئيسية - " + process.env.TITLE,
    meta: [
        {
          hid: 'description',
          name: 'description',
          content: process.env.TEXT
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: "الرئيسية - " + process.env.TITLE },
        {
          hid: 'og:description',
          property: 'og:description',
          content: process.env.TEXT
        },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.URL
        },
        { hid: 'og:image', property: 'og:image', content: "https://a.top4top.io/p_2543r0ibq1.png" },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "الرئيسية - " + process.env.TITLE
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: process.env.TEXT
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: "https://a.top4top.io/p_2543r0ibq1.png"
        },
        {
          hid: 'twitter:image:',
          name: 'twitter:image:alt',
          content: "الرئيسية - " + process.env.TITLE
        }
      ]
  },
}
</script>

<style>

</style>