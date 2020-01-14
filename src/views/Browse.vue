<template>
  <div class="about">
    <h2>Seasons</h2>
    <tagging-list v-bind:taggings="taggings.seasons" />
    <h2>Courses</h2>
    <tagging-list v-bind:taggings="taggings.courses" />
    <h2>Categories</h2>
    <tagging-list v-bind:taggings="taggings.categories" />
  </div>
</template>

<script>
import { getAllTaggings } from "@/services/taggings.service";
import TaggingList from "@/components/TaggingList.vue";

export default {
  components: {
    "tagging-list": TaggingList
  },
  data: () => ({
    taggings: {}
  }),
  async mounted() {
    this.taggings = await getAllTaggings();
  }
};
</script>
