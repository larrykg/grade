<template>
  <div class="logo-img">
    <img  :src="getLogoImg" alt="">
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
    },
    computed:{
      getLogoImg(){
        return this.$store.state.logoImg
      }
    }
  }
</script>

<style scoped>
    .logo-img {
        text-align: center;
        background-color: #fffef9;

    }
    .logo-img img{
        width: 200px;
        height: 50px;
    }
</style>