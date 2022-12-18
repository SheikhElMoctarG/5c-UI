<template>
  <div>
    <!-- inbox of quote -->
    <div
      class="flex justify-center text-center p-3 max-w-sm mx-auto bg-gray-100 rounded-md font-semibold"
    >
      <p class="ourSpan">
        هذا الموقع <span> لا يتبع لأي جهة حكومية </span>، انه موقع تمت برمجته
        خصيصا لمجموعة من الشباب من اجل المنافسة في ما بينهم وايضا الموقع
        <span> لا يتضمن كل الطلاب</span> ، فقط مجموعة مخصصة تم اختيارها، الإضافة
        لا تتم عشوائيا، وليس الجميع مخصص لكي يتم نشر نتيجته على هذا الموقع.
      </p>
    </div>
    <!-- info of the developer -->
    <div>
      <div class="flex justify-center items-center">
        <img
          class="rounded-full w-24 h-24 mt-2"
          src="../../assets/images/sheikh.jpg"
          alt="sheikh's image"
        />
      </div>
      <!-- name and job -->
      <h1 class="text-center name">الشيخ المختار</h1>
      <div class="flex justify-center items-center">
        <h2 class="job text-center">مهندس برمجيات</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutPage",
  data(){
    return{
      title: "حول الموقع",
      description: "هذا الموقع خاص، ولا يتبع لأي جهة حكومية موريتانية...",
      urlImage: "https://c.top4top.io/p_254354bst1.png",
      currentURL: "https://5c.sheikhelmoctar.tk/about"
    }
  },
  // head: {
  //   title: "حول الموقع",
  //   meta: [
  //   { property: "og:site_name", content: "process.env.TITLE" },
  //   { hid: "og:type", property: "og:type", content: "website" },
  //   {
  //     hid: "og:url",
  //     property: "og:url",
  //     content: "https://5c.sheikhelmoctar.tk/about",
  //   },
  //   {
  //     hid: "og:title",
  //     property: "og:title",
  //     content: "حول الموقع",
  //   },
  //   {
  //     hid: "og:description",
  //     property: "og:description",
  //     content: "هذا الموقع خاص، ولا يتبع لأي جهة حكومية موريتانية...",
  //   },
  //   {
  //     hid: "og:image",
  //     property: "og:image",
  //     content: "https://h.top4top.io/p_25421s5fy2.png",
  //   },
  //   { property: "og:image:width", content: "600" },
  //   { property: "og:image:height", content: "315" },
  //   ]
  // },
  head() {
    return {
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: process.env.TEXT
        // },
        // // Open Graph
        // {
        //   hid: 'og:title',
        //   property: 'og:title',
        //   content: process.env.TITLE
        // },
        // {
        //   hid: 'og:description',
        //   property: 'og:description',
        //   content: process.env.TEXT
        // },
        // // Twitter Card
        // {
        //   hid: 'twitter:title',
        //   name: 'twitter:title',
        //   content: process.env.TITLE
        // },
        // {
        //   hid: 'twitter:description',
        //   name: 'twitter:description',
        //   content: process.env.TEXT
        // },

        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.currentURL
        },
        { hid: 'og:image', property: 'og:image', content: this.urlImage },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.urlImage
        },
        {
          hid: 'twitter:image:',
          name: 'twitter:image:alt',
          content: this.title
        }
      ]
    }
  }
};
</script>

<style>
.ourSpan > span {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  padding: 0 5px;
  font-style: normal;
  font-weight: 600;
  border-radius: 0.25rem;
  line-height: 2;
  background-color: #fff5f5;
  color: #c53030;
}
.name {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 4px;
}
.job {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  padding: 0 5px;
  font-style: normal;
  font-weight: 600;
  border-radius: 0.25rem;
  line-height: 2;
  border-width: 2px;
  border-color: #29ad9530;
  color: #29ad95;
  text-align: center;
  width: max-content;
  font-size: 12px;
}
</style>
