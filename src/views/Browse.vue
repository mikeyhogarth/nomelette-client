<template>
  <div class="content">
    <page-header title="Browse." subtitle="Time to get inspired" />

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Seasons</h2>
        <tagging-list v-bind:taggings="taggings.seasons" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Courses</h2>
        <tagging-list v-bind:taggings="taggings.courses" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Categories</h2>
        <tagging-list v-bind:taggings="taggings.categories" />
      </div>
    </section>
  </div>
</template>

<script>
import { getAllTaggings } from "@/services/NomeletteService";
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
