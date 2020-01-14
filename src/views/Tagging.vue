<template>
  <div>
    <h2>{{ $route.params.tag }}</h2>
    <ul>
      <li v-bind:key="recipe.pk" v-for="recipe in recipes">
        <router-link v-bind:to="`/recipes/${recipe.recipeSlug}`">
          {{ recipe.recipeName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecipesForTagging } from "@/services/NomeletteService";

export default {
  data: () => ({
    recipes: []
  }),
  async mounted() {
    this.recipes = await getRecipesForTagging(this.$route.params.tag);
  }
};
</script>
