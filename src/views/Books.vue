<template>
  <div v-html="content" class="books" />
</template>

<script>
import content from "@/assets/md-content/Books.md";

export default {
  data: () => ({
    content
  })
};
</script>
