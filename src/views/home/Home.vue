<template>
  <div>
    <swiper :imgData="imgArr"/>
  </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import {getHomeData} from 'network/home';

  export default {
    name: "Home",
    components: {
      Swiper
    },
    data() {
      return {
        imgArr: []
      }
    },
    created() {
      //获取跑马灯的图片信息
      getHomeData().then(res => {
        console.log(res);
        const img = res.data.image;
        for (let i = 0; i < img.length; i++) {
          this.imgArr.push(img[i].url)
        }

      });
    }
  }
</script>

<style scoped>

</style>