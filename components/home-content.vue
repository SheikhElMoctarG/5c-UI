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
        <button v-on:click="search()" class="sm:inline-flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-300 focus-visible:ring ring-green-300 text-white text-center rounded-md outline-none transition duration-100 px-5 py-2 text-base">البحث</button>
    </div>
    <!-- loading text -->
    <div class="flex justify-center items-center" v-if="loading">جاري التحميل ...</div>
    <div v-if="errorNotFound" class="bg-orange-500 rounded-md text-white mt-2">
      حدث خطأ غير متوقع
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
        loading: false
      }
    },
    methods: {
      async search(){
        this.loading = true;
        this.errorNotFound = false;
        await axios.post(process.env.API_URL, {
          id: parseInt(this.number),
          authentication: process.env.AUTHENTICATION
        }).then((res)=> this.studentData = res.data)
          .catch((e)=> {
            this.loading = false;
            this.errorNotFound = true;
          });
        this.wait(30).then(()=> {
          if(this.studentData == null){
            this.loading = false;
            this.errorNotFound = true;
          }
          console.log("done sheikh el moctar");
        });
        this.errorNotFound = await this.checkError();
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
        this.$router.push("/students/"+this.studentData.id_number);
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