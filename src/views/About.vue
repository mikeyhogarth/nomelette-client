<template>
  <div v-html="content" class="about" />
</template>

<script>
import content from "@/assets/md-content/About.md";

export default {
  data: () => ({
    content
  })
};
</script>
