<template>
  <div class="center-container">
    <div v-show="logoShow" class="img-container">
      <main-img/>
    </div>
    <div class="center-tab">
      <el-menu
              :default-active="$route.path"
              router
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#293047"
              text-color="#fff"
              active-text-color="#ffd04b">
       <el-menu-item :index="item.index" v-for="item in mainTag">{{item.name}}</el-menu-item>

        <!--        <el-submenu index="news">-->
        <!--          <template slot="title">新闻中心</template>-->
        <!--          <el-menu-item index="1">新闻动态</el-menu-item>-->
        <!--          <el-menu-item index="2">行业新闻</el-menu-item>-->
        <!--        </el-submenu>-->
        <!--        <el-submenu index="3">-->
        <!--          <template slot="title">古钱评级</template>-->
        <!--          <el-menu-item index="3-1">机制币评级</el-menu-item>-->
        <!--          <el-menu-item index="3-2">纸币评级</el-menu-item>-->
        <!--          <el-menu-item index="3-3">徽章·奖章·像章</el-menu-item>-->
        <!--          <el-menu-item index="3-4">邮品评级</el-menu-item>-->
        <!--          <el-menu-item index="3-5">更多内容</el-menu-item>-->
        <!--        </el-submenu>-->
      </el-menu>
    </div>
    <bottom-view/>
  </div>
</template>

<script>
  import MainImg from "components/content/MainImg";
  import BottomView from "components/content/BottomView";

  export default {
    name: 'MainTab',
    props: {
      mainTag: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        logoShow: true,
        activeIndex: '1',

        routerMap: {
          home: ['/home'],
          news: ['/news/dynamic', '/news/industry']
        },

      };
    },
    components: {
      MainImg,
      BottomView
    },
    methods: {
      handleSelect(key, keyPath) {
        const mapKey = keyPath[0];
        const mapIndex = keyPath[1] - 1
        //Tab页的路由控制
        // if (keyPath.length > 1) {
        //   if (this.$route.path.indexOf(this.routerMap[mapKey][mapIndex]) == -1) {
        //     this.$router.replace(this.routerMap[mapKey][mapIndex]);
        //   }
        // } else {
        //   this.$router.replace(this.routerMap[mapKey][0])
        // }

      }
    }
  }
</script>

<style scoped>
    .center-tab {
        margin: 0 20%;
    }

    .center-container {
        background-color: #293047;
        border-bottom: solid 1px #e6e6e6;
    }
</style>