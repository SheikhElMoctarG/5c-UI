<template>
    <div>
        <card-student  v-if="student != null" :average="student.average" :className="student.class" :name="student.name" :subs="student.subjects"/>
        <div class="flex justify-center items-center" v-if="loading">جاري التحميل ...</div>
        <div class="flex justify-center items-center text-orange-600" v-if="notFound">لم يتم العثور على هذا الرقم في قاعدة البيانات. </div>
    
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
        name: "studentPage",
        
        asyncData({route}){
            return  axios.post(process.env.API_URL, {
                id: parseInt(route.params.slug),
                authentication: process.env.AUTHENTICATION
                }).then((res)=> {
                    if(res.data.error){
                        return {
                           notFound: true,
                           loading: false
                        }
                        
                    } else {
                        return {
                            student: res.data,
                            loading: false
                        }
                        
                    }
                    
                })
        }
    };
    </script>
    
    <style>
    
    </style>