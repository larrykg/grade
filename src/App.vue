<template>
  <div id="app">
    <main-tab></main-tab>
  </div>
</template>

<script>

import MainTab from "components/content/MainTab";
export default {
  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
