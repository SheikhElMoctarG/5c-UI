<template>
<div v-if="student != null">
    <card-student average="average" className="student.class" name="student.name"/>
</div>
</template>

<script>
import axios from "axios";
import cardStudent from '../../components/cardStudent.vue';
export default {
  components: { cardStudent },
    data() {
        return {
            student: null,
            number: this.$route.params.slug
        }
    },
    methods: {
        async getStudent(){
            await axios.post(process.env.API_URL, {
            id: parseInt(this.number),
            authentication: process.env.AUTHENTICATION
            }).then((res)=> this.student = res.data)
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