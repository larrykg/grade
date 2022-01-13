<template>
  <main-view>
    <div slot="main-img">
      <img src="~assets/img/news/news-logo.png" alt="">
    </div>
<!--    <div slot="main-content">-->
<!--      <router-view/>-->
<!--    </div>-->
  </main-view>
</template>


<script>
  import MainView from "components/content/MainView";

  export default {
    name: "RatingStandard",
    components: {
      MainView
    },
    data() {
      return {
        standardTag:[
          {
            name:'评级标准'
          }
        ]
      }
    },
    methods:{

    },
    created() {

    }
  }
</script>

<style scoped>

</style>