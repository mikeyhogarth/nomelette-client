<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-bind:key="tagging.slug" v-for="tagging in taggings">{{ tagging.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["title", "taggings"]
};
</script>