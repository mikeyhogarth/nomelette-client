<template>
  <div id="app">
    <navigation-bar />
    <main id="main">
      <router-view />
    </main>
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

<style scoped>
#main {
  min-height: 15em;
}
</style>
