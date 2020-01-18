<template>
  <div class="content">
    <page-header :title="recipe.recipeName" />
    <section class="section">
      <div class="container">
        <blockquote v-if="recipe.description">
          <div v-html="recipe.description" class="size-4" />
        </blockquote>
        <cookie-loader :isLoading="isLoading" />

        <dl>
          <dt>Preparation time:</dt>
          <dd>{{ recipe.preparationTime }}</dd>
          <dt>Cooking Time:</dt>
          <dd>{{ recipe.cookingTime }}</dd>
        </dl>
        <h3>Ingredients</h3>
        <div v-html="parsedIngredients" />
        <h3>Method</h3>
        <div v-html="parsedMethod" />
        <div class="footnote" v-html="recipe.footnote" />
      </div>
    </section>
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
