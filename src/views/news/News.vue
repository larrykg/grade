<template>
<div class="view-container">
  <main-view>
    <div slot="main-img">
      <img src="~assets/img/news/news-logo.png" alt="">
    </div>
    <div slot="main-ul">
      <nav-ul></nav-ul>
    </div>
    <div slot="main-content">
      <router-view/>
    </div>
  </main-view>

</div>
</template>

<script>
import Menu from "components/common/menu/Menu";
import MainView from "components/content/MainView";
import NavUl from "components/content/NavUl";
export default {
  name: "News",
  components:{
    Menu,
    MainView,
    NavUl
  }
}
</script>

<style scoped>
.view-container{

}
</style>