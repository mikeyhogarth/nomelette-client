<template>
  <div id="app">
    <navigation-bar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    "navigation-bar": NavigationBar,
    "the-footer": Footer
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
