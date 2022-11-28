<template>
  <div class="container mx-auto px-3">
    <!-- container -->
    <div class="bg-green-500 rounded-sm mx-1 text-white text-center">
        <h1 class="text-xl font-semibold mt-2"> {{name}} </h1>
        <p> ## {{className}} ## </p>
    </div>
  </div>
</template>

<script>
export default {
    name:"cardStudent",
    props: ['name', 'className', 'average', 'number']
}
</script>

<style>

</style>