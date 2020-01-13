<template>
  <div class="about">
    <p>This is the categories page</p>

    <h2>Seasons</h2>
    <ul id="seasons">
      <li v-bind:key="season.slug" v-for="season in seasons">
        {{ season.name }}
      </li>
    </ul>

    <h2>Courses</h2>
    <ul id="courses">
      <li v-bind:key="course.slug" v-for="course in courses">
        {{ course.name }}
      </li>
    </ul>

    <h2>Categories</h2>
    <ul id="categories">
      <li v-bind:key="category.slug" v-for="category in categories">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getCategories,
  getCourses,
  getSeasons
} from "@/services/taggings.service";

export default {
  data: () => ({
    seasons: {},
    courses: {},
    categories: {}
  }),
  async mounted() {
    this.seasons = await getSeasons();
    this.categories = await getCategories();
    this.courses = await getCourses();
  }
};
</script>
