<template>
  <div>
    <h2>{{ $route.params.tag }}</h2>
    <ul>
      <li v-bind:key="recipe.pk" v-for="recipe in recipes">
        {{ recipe.recipeName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecipesForTagging } from "@/services/recipes.service";

export default {
  data: () => ({
    recipes: []
  }),
  async mounted() {
    this.recipes = await getRecipesForTagging(this.$route.params.tag);
  }
};
</script>
