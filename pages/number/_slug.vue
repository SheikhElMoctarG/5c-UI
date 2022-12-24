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

const title = "معلومات الطالب";
const description =
  "هذه الصفحة تمكنك من الإطلاع على نتائج الطالب إذا كان موجود في قاعدة البيانات";
const urlImage = "https://e.top4top.io/p_2543szwz12.png";
const currentURL = "https://5c.sheikhelmoctar.tk/number/";

export default {
  components: { cardStudent, Footer1 },

  data() {
    return {
      student: null,
      number: this.$route.params.slug,
      loading: true,
      notFound: false,
      myname: "sheikh el-moctar"
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


  // ----- meta tags start
  head: {
    title: title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: description,
      },
      // Open Graph
      { hid: "og:title", property: "og:title", content: title },
      {
        hid: "og:description",
        property: "og:description",
        content: description,
      },
      { hid: "og:type", property: "og:type", content: "page" },
      {
        hid: "og:url",
        property: "og:url",
        content: currentURL,
      },
      { hid: "og:image", property: "og:image", content: urlImage },
      // Twitter Card
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: urlImage,
      },
      {
        hid: "twitter:image:",
        name: "twitter:image:alt",
        content: title,
      },
    ],
  },


};

</script>

<style></style>
