<template>
  <div class="text-center flex justify-center items-center mb-3">
    <div>
      <!-- the big text -->
    <h1 class="text-gray-800 mt-16">البحث من خلال رقم الجلوس:</h1>
    <!-- the input and button to search -->
    <div>
        <input type="number" id="numberOfTheStudent" placeholder="ادخل الرقم.." class="my-5 border border-green-500 py-1 px-2 rounded-full text-sm max-w-md hover:border-green-500" v-model="number">
    </div>
    <div>
        <button v-on:click="search()" class="sm:inline-flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-center rounded-md outline-none transition duration-100 px-5 py-2 text-base">البحث</button>
    </div>
    <div v-if="errorNotFound" class="bg-orange-500 rounded-md text-white mt-2">
      حدث خطأ غير متوقع
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "home-content",
    data() {
      return {
        number: null,
        studentData: null,
        errorNotFound: false
      }
    },
    methods: {
      async search(){
        await axios.post("https://api.sheikhelmoctar.tk/", {
          id: parseInt(this.number),
          authentication: process.env.AUTHENTICATION
        }).then((res)=> this.studentData = res.data)
          .catch((e)=> console.log(e));
        this.errorNotFound = await this.checkError();
        await console.log(this.studentData);
      },
      checkError(){
        try {
          if(this.studentData.error){
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return true;
        }
      }
    }
}
</script>

<style>

</style>