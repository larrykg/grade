<template>
  <el-carousel height="400px" indicator-position="outside">
    <el-carousel-item v-for="item in imgData" :key="item">
      <img class="banner-img" :src="item" alt="无图片"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Swiper",
  props:{
    imgData:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.banner-img{
    height:auto;
    display: block;
    max-width: 100%;

}
</style>