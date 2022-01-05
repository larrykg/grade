<template>
  <div id="app">
    <main-tab/>
    <router-view/>
    <back-top/>
  </div>
</template>

<script>

import MainTab from "components/content/MainTab";
import BackTop from "components/content/BackTop";
export default {
  name: 'App',
  components: {
    MainTab,
    BackTop
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
