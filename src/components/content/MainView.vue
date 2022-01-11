<template>
  <div class="main_view">
    <div class="main-img">
      <slot name="main-img">
      </slot>
    </div>
    <div class="main-center">
      <main-content>
          <router-view/>
      </main-content>

<!--      <div class="main-ul">-->
<!--        <slot name="main-ul">-->
<!--        </slot>-->
<!--      </div>-->
<!--      <div class="main-content">-->
<!--        <slot name="main-content"></slot>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import MainContent from "components/content/MainContent";
export default {
  name: "MainView",
  components:{
    MainContent
  },
  data(){
    return{
      currentRoute:''
    }
  },
  created() {
    //console.log(this.$route.path);
    // const Arr=  this.$route.path.split('/');
    // console.log(Arr[Arr.length-1]);
    // this.currentRoute = Arr[Arr.length-1]
  }
}
</script>

<style scoped>
.main-img img {
  height: 150px;
  width: 100%;
}

.main_view {
  display: block;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9;
 }

.main-center {
  display: flex;
  position: relative;

  left: 15%;
  width: 70%;
  background-color: #fff;
}
.main-ul{
  flex: 1;
}
.main-content{
  flex: 3;
}

</style>