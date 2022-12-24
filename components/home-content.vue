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
    <!-- loading text -->
    <div class="flex justify-center items-center" v-if="loading">جاري التحميل ...</div>
    <div v-if="errorFromServer" class="bg-orange-500 rounded-md text-white mt-2 p-1 w-64">
      لقد حدث خطأ، من الممكن ان تكون المشكلة من السيرفر الرئيسي.
    </div>
    <div v-if="errorNotFound" class="bg-red-500 rounded-md text-white mt-2 p-1 w-64">
      لم يتم العثور على هذا الرقم في قاعدة البيانات، تأكد من الرقم.
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cardStudent from './cardStudent.vue';
export default {
  components: { cardStudent },
    name: "home-content",
    data() {
      return {
        number: null,
        studentData: null,
        errorNotFound: false,
        errorFromServer: false,
        loading: false
      }
    },
    methods: {
      async search(){
        this.loading = true;
        this.errorNotFound = false;
        this.errorFromServer = false;
        await axios.post(process.env.API_URL, {
          id: parseInt(this.number),
          authentication: process.env.AUTHENTICATION
        }).then((res)=> {
          if(res.data.error && res.data.error != undefined){
            this.errorNotFound = true;
            this.loading = false;
          } else {
            this.studentData = res.data
          }
        })
          .catch((e)=> {
            this.loading = false;
            this.errorNotFound = true;
          });
        this.wait(12).then(()=> {
          if(this.studentData == null && !this.errorNotFound){
            this.loading = false;
            this.errorFromServer = true;
          }
        });
        // this.errorNotFound = await this.checkError();
        await this.check();
      },
      checkError(){
        try {
          if(this.studentData.error){
            this.loading = false;
            return true;
          } else {
            this.loading = false;
            return false;
          }
        } catch (error) {
          this.loading = false;
          return true;
        }
      },
      toTheStudentPage(){
        this.$router.push("/number/"+this.studentData.id_number);
      },
      check(){
        if(!this.errorNotFound)
          this.toTheStudentPage();
      },
      // function to waiting the response with seconds
      async wait(s){
        return new Promise((resolve) => {
              setTimeout(resolve, s * 1000);
          });
      }
    }
}
</script>

<style>

</style>