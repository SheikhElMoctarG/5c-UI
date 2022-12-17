<template>
  <div>
    <card-student
      v-if="student != null"
      :average="student.average"
      :className="student.class"
      :name="student.name"
      :subs="student.subjects"
    />
    <div class="flex justify-center items-center" v-if="loading">
      جاري التحميل ...
    </div>
    <div
      class="flex justify-center items-center text-orange-600"
      v-if="notFound"
    >
      لم يتم العثور على هذا الرقم في قاعدة البيانات.
    </div>
    <!-- footer button -->
    <div>
      <footer1 />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cardStudent from "../../components/cardStudent.vue";
import Footer1 from "../../components/footer.vue";
export default {
  head: {
    title: "نتيجة الطالب",
    meta: [
      {
        hid: "description",
        name: "description",
        content: process.env.TEXT,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://j.top4top.io/p_2542v35yh3.png'
      }
    ],
    meta: [
    { property: "og:site_name", content: process.env.TITLE },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: process.env.URL + "/number/",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "نتيجة الطالب",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: process.env.TEXT,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://j.top4top.io/p_2542v35yh3.png",
    },
    { property: "og:image:width", content: "740" },
    { property: "og:image:height", content: "300" },
    ]
  },
  components: { cardStudent, Footer1 },

  data() {
    return {
      student: null,
      number: this.$route.params.slug,
      loading: true,
      notFound: false,
    };
  },
  methods: {
    async getStudent() {
      await axios
        .post(process.env.API_URL, {
          id: parseInt(this.number),
          authentication: process.env.AUTHENTICATION,
        })
        .then((res) => {
          if (res.data.error) {
            this.notFound = true;
            this.loading = false;
          } else {
            this.student = res.data;
            this.loading = false;
          }
        })
        .catch((e) => console.log(e));
      await this.wait(0).then(() => {
        if (this.student.error && this.student.error != undefined) {
          this.loading = false;
          this.student = null;
        }
        console.log("done sheikh el moctar");
      });
    },
    async wait(s) {
      return new Promise((resolve) => {
        setTimeout(resolve, s * 1000);
      });
    },
  },
  name: "studentPage",
  created() {
    this.getStudent();
  },
};
</script>

<style></style>
