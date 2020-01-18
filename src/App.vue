<template>
  <div id="app">
    <navigation-bar />
    <main>
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

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #00d2d1;
$primary-invert: findColorInvert($primary);
$accent: #4099ff;
$accent-invert: findColorInvert($accent);

$colors: (
  "primary": (
    $primary,
    $primary-invert
  ),
  "accent": (
    $accent,
    $accent-invert
  )
);

// Other
$navbar-height: 4rem;
$navbar-burger-color: "black";

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
