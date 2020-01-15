<template>
  <div>
    <h2>{{ recipe.recipeName }}</h2>
    <p>
      from the book
      <span v-html="recipe.book" />
    </p>
    <p>Preparation time: {{ recipe.preparationTime }}, cooking time {{ recipe.cookingTime}}</p>
    <div v-html="recipe.description" />
    <h3>Ingredients</h3>
    {{ recipe.ingredients }}
    <h3>Method</h3>
    {{ recipe.method }}
    <div class="footnote" v-html="recipe.footnote" />
  </div>
</template>

<script>
import { getRecipe } from "@/services/NomeletteService";

export default {
  data: () => ({
    recipe: {}
  }),
  async mounted() {
    this.recipe = await getRecipe(this.$route.params.recipe);
  }
};
</script>
