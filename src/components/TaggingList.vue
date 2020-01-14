<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-bind:key="tagging.slug" v-for="tagging in taggings">
        <router-link v-bind:to="`/tagged-with/${tagging.slug}`">
          {{ tagging.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    taggings: {
      type: Array
    }
  }
};
</script>
