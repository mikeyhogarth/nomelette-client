<template>
  <div v-html="intro" class="home" />
</template>

<script>
import intro from "@/assets/md-content/HomeIntro.md";

export default {
  data: () => ({
    intro
  })
};
</script>
