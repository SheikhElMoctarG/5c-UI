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