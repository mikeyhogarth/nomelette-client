<template>
  <div class="content">
    <page-header :title="recipe.recipeName" />
    <section class="section">
      <nomelette-loader :isLoading="isLoading" />
      <div class="container" v-if="!isLoading">
        <blockquote v-if="recipe.description">
          <div v-html="recipe.description" class="size-4" />
        </blockquote>

        <dl>
          <dt v-if="recipe.preparationTime">
            <b-icon pack="fas" icon="clock" size="is-small" />&nbsp;Preparation time:
          </dt>
          <dd v-if="recipe.preparationTime">{{ recipe.preparationTime }}</dd>
          <dt v-if="recipe.cookingTime">
            <b-icon pack="fas" icon="clock" size="is-small" />&nbsp;Cooking Time:
          </dt>
          <dd v-if="recipe.cookingTime">{{ recipe.cookingTime }}</dd>
        </dl>

        <h3>Ingredients</h3>
        <div v-html="parsedIngredients" class="ingredients" />
        <hr />
        <h3>Method</h3>
        <div v-html="parsedMethod" />
        <hr />
        <div class="footnote" v-html="recipe.footnote" />
        <nomelette-spacer />
      </div>
    </section>
  </div>
</template>

<script>
import { getRecipe } from "@/services/NomeletteService";
import { parseIngredients, parseMethod } from "@/util";

export default {
  data: () => ({
    recipe: {
      recipeName: "..."
    },
    isLoading: true
  }),
  async mounted() {
    this.recipe = await getRecipe(this.$route.params.recipe);
    this.isLoading = false;
  },
  computed: {
    // a computed getter
    parsedIngredients: function() {
      return parseIngredients(this.recipe.ingredients);
    },
    parsedMethod: function() {
      return parseMethod(this.recipe.method);
    }
  }
};
</script>

<style lang="scss">
dt {
  font-weight: bold;
}
#ingredients-list {
  list-style: none;
  margin-left: 0;
}
</style>
