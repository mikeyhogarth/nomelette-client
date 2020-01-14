<template>
  <div v-html="content" class="about" />
</template>

<script>
import content from "@/content/About.md";

export default {
  data: () => ({
    content
  })
};
</script>
