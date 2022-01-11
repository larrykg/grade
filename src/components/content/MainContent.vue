<template>
  <el-tabs v-model="activeName"
           :tab-position="tabPosition"
           @tab-click="tabClick"
           style="height: 900px;"
           class="main-content">

    <el-tab-pane :label="tagName">
      <slot>
        <p>具体内容</p>
      </slot>
    </el-tab-pane>

    <!--    <el-tab-pane label="新闻动态" name="dynamic">-->
    <!--      <slot></slot>-->
    <!--    </el-tab-pane>-->
    <!--    <el-tab-pane label="行业新闻" name="industry">-->
    <!--      <slot></slot>-->
    <!--    </el-tab-pane>-->
  </el-tabs>
</template>

<script>
  export default {
    name: "MainContent",
    data() {
      return {
        tabPosition: 'left',
        activeName: '',
        currentTag: [],
        tagName: ''
      };
    },
    props: {
      tags: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      tabClick(tab, event) {
        //TAB点击实现子路由跳转
        // console.log(tab._props.name);
        // console.log(this.$router);
        if (this.$route.path.indexOf(tab._props.name) == -1) {
          // this.$router.replace('/news/' + tab._props.name)
        }
      },
      getTag() {
        console.log(this.$route.path);
        console.log(this.$store.state.ratingTag[1].name);
        //目前标签较少 暂时写固定
        if (this.$route.path.indexOf('rating') > 0) {
          this.tagName = this.$store.state.ratingTag[1].name
          this.currentTag = this.$store.state.ratingTag[1];
        }
        if (this.$route.path.indexOf('charge') > 0) {
          this.tagName = this.$store.state.ratingTag[2].name
        }
        if (this.$route.path.indexOf('help') > 0) {
          this.tagName = this.$store.state.ratingTag[3].name
        }
      }
    },
    created() {
      this.getTag();
      // const Arr = this.$route.path.split('/');
      // this.activeName = Arr[Arr.length - 1]
    }
  }
</script>

<style scoped>
    .main-content {
        overflow: hidden;
    }
</style>