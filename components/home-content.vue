<template>
  <div class="text-center flex justify-center items-center">
    <div>
      <!-- the big text -->
    <h1 class="text-gray-800 mt-16">البحث من خلال رقم الجلوس:</h1>
    <!-- the input and button to search -->
    <div>
        <input type="number" id="numberOfTheStudent" placeholder="ادخل الرقم.." class="my-5 border border-green-500 py-1 px-2 rounded-full text-sm max-w-md hover:border-green-500" v-model="number">
    </div>
    <div>
        <button v-on:click="search()" class="sm:inline-flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-300 focus-visible:ring ring-green-300 text-white text-center rounded-md outline-none transition duration-100 px-5 py-2 text-base">البحث</button>
    </div>
    </div>
  </div>
</template>

<script>
import cardStudent from './cardStudent.vue';
export default {
  components: { cardStudent },
    name: "home-content",
    data() {
      return {
        number: null,
        studentData: null,
      }
    },
    methods: {
      async search(){
        window.location.href = "/number/"+this.number;
      }
    }
}
</script>

<style>

</style>