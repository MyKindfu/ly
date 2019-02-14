<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view/>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import './assets/css/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
