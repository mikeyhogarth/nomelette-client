<template>
  <div>
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="hero-title">nomelette</h1>
          <h2 class="subtitle">
            Get your pinny on.
          </h2>
        </div>
      </div>
    </section>
    <section class="section has-text-centered">
      <b-button rounded size="is-primary is-medium"
        >Browse By Category</b-button
      >
      <b-button rounded size="is-primary is-medium">Browse By Book</b-button>
      <br />
      <b-button rounded outlined size="is-primary is-medium"
        >What is Nomelette?</b-button
      >
    </section>
    <section class="section has-text-centered">
      <div v-html="intro" class="home" />
    </section>
  </div>
</template>

<script>
import intro from "@/assets/md-content/HomeIntro.md";

export default {
  data: () => ({
    intro
  })
};
</script>

<style lang="scss">
#hero-title {
  font-size: 6em;
  font-family: "Leckerli One", cursive;
}
</style>
