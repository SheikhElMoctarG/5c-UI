<template>
<div>
    <card-student  v-if="student != null" :average="student.average" :className="student.class" :name="student.name"/>
    <div class="flex justify-center items-center" v-if="loading">جاري التحميل ...</div>
</div>
</template>

<script>
import axios from "axios";
import cardStudent from '../../components/cardStudent.vue';
export default {
    head: {
        title: "نتيجة الطالب",
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: process.env.TEXT
        }
        ],
  },  
  components: { cardStudent },
    data() {
        return {
            student: null,
            number: this.$route.params.slug,
            loading: true
        }
    },
    methods: {
        async getStudent(){
            await axios.post(process.env.API_URL, {
            id: parseInt(this.number),
            authentication: process.env.AUTHENTICATION
            }).then((res)=> {
                this.student = res.data;
                this.loading = false;
            })
            .catch((e)=> console.log(e));
            // this.wait(5).then(()=> {
            //     // if(this.student == null){
            //     //     this.loading = false;
            //     // }
            //     console.log("done sheikh el moctar");
            // });
            // this.loading = false;
        },
        wait(s){
            return new Promise((resolve) => {
                setTimeout(resolve, s * 1000);
            });
        }
    },
    name: "studentPage",
    created(){
        this.getStudent();
    }
};
</script>

<style>

</style>