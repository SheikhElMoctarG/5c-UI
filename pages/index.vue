<template>
  <div>
    <tutorial/>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLogo from '../components/NuxtLogo.vue'
import Tutorial from '../components/Tutorial.vue'

export default Vue.extend({
  components: { NuxtLogo, Tutorial },
  name: 'IndexPage'
})
