<template>
  <div class='perfectcenter h-full absolute inset-0'>
    <div class="bg-white h-50 w-40 perfectcenter">
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
      OAuth2Init(this.$config.google)
    }
  }
</script>

<style scoped>
</style>