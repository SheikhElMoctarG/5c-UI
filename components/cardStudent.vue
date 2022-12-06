<template>
  <div class="container mx-auto px-3">
    <!-- container -->
    <div class="bg-green-500 rounded-sm mx-5 text-white text-center">
        <h1 class="text-xl font-bold mt-2"> {{name}} </h1>
        <p class="text-sm">  ##{{className}}##  </p>
        <!-- line -->
        <div class="flex justify-center items-center"> <span class="w-36 bg-white rounded-lg my-1" id="line-of-card"></span> </div>
        <!-- the content of decieded and the average -->
        <div class="flex justify-evenly">
          <!-- the average -->
          <div class="my-1">
            <h1 class="font-light">المعدل:</h1>
            <span class="font-semibold"> {{ average }} </span>
          </div>
          <!-- the decided -->
          <div>
            <h1 class="font-light">القرار: </h1>
            <span v-if="average >= 10.00" class="font-semibold">ناجح</span>
            <span v-if="average < 10.00" class="font-semibold">راسب</span>
          </div>
        </div>
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
#line-of-card {
  height: 2px;
}
</style>