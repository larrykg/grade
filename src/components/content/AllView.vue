<template>
  <div>
    <main-tab :mainTag="tagObj"/>
    <router-view/>
    <back-top/>
  </div>
</template>

<script>
  import MainTab from "components/content/MainTab";
  import BackTop from "components/content/BackTop";
  import {getHomeData} from 'network/home';

  export default {
    name: "AllView",
    components: {
      MainTab,
      BackTop
    },
    data() {
      return {
        tagObj: []
      }
    },
    created() {
      getHomeData().then(res => {
        console.log(res);
        this.tagObj = res.data.tag;
        this.addRatingTag(res.data.tag)
      });

    },
    methods:{
      addRatingTag(payLoad){
        this.$store.commit('addTag',payLoad)
      }
    }
  }
</script>

<style scoped>

</style>