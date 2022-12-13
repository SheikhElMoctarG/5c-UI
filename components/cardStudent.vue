<template>
  <div class="container mx-auto px-3">
    <!-- container -->
    <!-- if the student is a successfully -->
    <div class="bg-green-500 rounded-md mx-5 text-white text-center mycard"  v-if="average >= 10.00">
        <h1 class="text-xl font-bold pt-2"> {{name}} </h1>
        <p class="text-sm">  ##{{className}}##  </p>
        <!-- line -->
        <div class="flex justify-center items-center"> <span class="w-36 bg-white rounded-lg my-1" id="line-of-card"></span> </div>
        <!-- the content of decieded and the average -->
        <div class="flex justify-evenly">
          <!-- the decided -->
          <div>
            <h1 class="font-light">القرار: </h1>
            <span class="font-semibold text-slate-100">ناجح</span>
          </div>
          <!-- the average -->
         <div class="my-1">
            <h1 class="font-light">المعدل:</h1>
            <span class="font-semibold text-slate-100"> {{ average }} </span>
          </div>
        </div>
         
        <!-- the matterials -->
        <div class="flex justify-center items-center text-slate-900 mx-3 my-2 rounded-md py-3" id="matterialsDiv">
          <table class="w-full">
            <tr class="color-of-tr" id="top-of-table">
              <th>المادة</th>
              <th>المعدل</th>
            </tr>
            <!-- content -->
            <tr class="font-bold text-sm" v-for="(sub, index) of subjects" :key="index">
              <td>{{ sub.title }}</td>
              <td>{{sub.points}}</td>
              
            </tr>
          </table>
        </div>
        <div></div>
    </div>
    <!-- if the student is a fail -->
    <div class="bg-red-500 rounded-md mx-5 text-white text-center mycard" v-if="average < 10.00">
        <h1 class="text-xl font-bold pt-2"> {{name}} </h1>
        <p class="text-sm">  ##{{className}}##  </p>
        <!-- line -->
        <div class="flex justify-center items-center"> <span class="w-36 bg-white rounded-lg my-1" id="line-of-card"></span> </div>
        <!-- the content of decieded and the average -->
        <div class="flex justify-evenly">
          <!-- the decided -->
          <div>
            <h1 class="font-light">القرار: </h1>
            <span class="font-semibold text-slate-100">راسب</span>
          </div>
          <!-- the average -->
         <div class="my-1">
            <h1 class="font-light">المعدل:</h1>
            <span class="font-semibold text-slate-100"> {{ average }} </span>
          </div>
        </div>
         
        <!-- the matterials -->
        <div class="flex justify-center items-center text-slate-900 mx-3 my-2 rounded-md py-3" id="matterialsDiv">
          <table class="w-full">
            <tr class="color-of-tr" id="top-of-table">
              <th>المادة</th>
              <th>المعدل</th>
            </tr>
            <!-- content -->
            <tr class="font-bold text-sm" v-for="(sub, index) of subjects" :key="index">
              <td>{{ sub.title }}</td>
              <td>{{sub.points}}</td>
              
            </tr>
          </table>
        </div>
        <div></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"cardStudent",
    props: ['name', 'className', 'average', 'number', 'subs'],
    data(){
      return{
        subjects: [
          {title: "الرياضيات", points: this.subs.math},
          {title: "العربية", points: this.subs.arabic},
          {title: "الإنجليزية", points: this.subs.english},
          {title: "التاريخ والجغرافيا", points: this.subs.HG},
          {title: "التربية المدنية", points: this.subs.m},
          {title: "الفيزياء", points: this.subs.pc},
          {title: "العلوم", points: this.subs.science},
          {title: "التربية الإسلامية", points: this.subs.islamic},
          {title: "الفلسفة", points: this.subs.ph},
          {title: "الفرنسية", points: this.subs.french}
        ]
      }
    }
}
</script>

<style>
#line-of-card {
  height: 2px;
}
#matterialsDiv {
  background-color: #eeeeeead;
}
.color-of-tr{
  color: #959494ab;
}
#top-of-table{
  font-size: 13px;
}
.mycard{
  min-height: 410px;
  margin-bottom: 10px;
}
</style>