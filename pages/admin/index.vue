<template>
  <div class='perfectcenter h-full w-full inset-0 md:mt-200 lg:mt-300'>
    <div class="perfectcenter bg-white h-50 w-40">
      <div id='google_sign_in' />
    </div>
  </div>
</template>

<script>
  import {OAuth2Init} from '~/plugins/admin-auth'
  export default {
    head() {
      title: 'ADMIN'
    },
    created(){
      OAuth2Init(this.$config.google, this)
    }
  }
</script>

<style scoped>
</style>