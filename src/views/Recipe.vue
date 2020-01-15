<template>
  <div>
    <h2>{{ recipe.recipeName }}</h2>
    <p>
      from the book
      <span v-html="recipe.book" />
    </p>
    <p>
      Preparation time: {{ recipe.preparationTime }}, cooking time
      {{ recipe.cookingTime }}
    </p>
    <div v-html="recipe.description" />
    <h3>Ingredients</h3>
    <div v-html="parsedIngredients" />
    <h3>Method</h3>
    <div v-html="parsedMethod" />
    <div class="footnote" v-html="recipe.footnote" />
  </div>
</template>

<script>
import { getRecipe } from "@/services/NomeletteService";
import { delineify } from "@/util";

export default {
  data: () => ({
    recipe: {}
  }),
  async mounted() {
    this.recipe = await getRecipe(this.$route.params.recipe);
  },
  computed: {
    // a computed getter
    parsedIngredients: function() {
      return delineify(this.recipe.ingredients);
    },
    parsedMethod: function() {
      return delineify(this.recipe.method);
    }
  }
};
</script>
