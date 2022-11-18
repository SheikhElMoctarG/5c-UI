<template>
  <!-- content -->
  <div class="flex items-center justify-between">
    <!-- right -->
    <div class="flex items-center">
      <!-- icon -->
      <div class="mx-2" v-on:click="share">
          <img src="~/assets/images/icon.png" alt="icon" class="w-16 h-16">
      </div>
      <!-- title -->
      <div>
          <h2>الرياضيات</h2>
      </div>
    </div>
    <!-- share button -->
    <div class="mx-2" v-on="share()">
        <img src="~/assets/images/arrow-up.svg" alt="share button" class="w-5 h-5">
    </div>
  </div>
</template>

<script>
export default {
    name: "navbar",
    methods: {
      share(){
        navigator.share({
          title: process.env.TITLE,
          text: process.env.TEXT,
          url: process.env.URL
        });
      }
    }
}
</script>

<style>

</style>