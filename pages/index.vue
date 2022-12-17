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
    title: process.env.TITLE,
    meta: [
    { property: "og:site_name", content: process.env.TITLE },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://5c.sheikhelmoctar.tk/",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: process.env.TITLE,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: process.env.TEXT,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://g.top4top.io/p_2542ybai71.png",
    },
    { property: "og:image:width", content: "600" },
    { property: "og:image:height", content: "315" },
    ]
  },
}
</script>

<style>

</style>