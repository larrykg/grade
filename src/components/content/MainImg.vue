<template>
  <div class="logo-img">
    <img src="~assets/img/logo.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "MainImg",
    props: {
      logo: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
    .logo-img {
        text-align: center;
        background-color: #402e4c;
    }
</style>