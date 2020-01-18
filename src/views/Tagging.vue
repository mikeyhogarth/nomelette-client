<template>
  <div class="content">
    <page-header :title="title" :subtitle="subtitle" />

    <section class="section">
      <div class="container">
        <nomelette-loader :isLoading="isLoading" />

        <ul>
          <li v-bind:key="recipe.pk" v-for="recipe in recipes">
            <router-link v-bind:to="`/recipes/${recipe.recipeSlug}`">{{ recipe.recipeName }}</router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { getRecipesForTagging } from "@/services/NomeletteService";

export default {
  data: function() {
    return {
      title: this.$route.params.tag,
      subtitle: `Recipes related to ${this.$route.params.tag}`,
      recipes: [],
      isLoading: true
    };
  },

  async mounted() {
    this.recipes = await getRecipesForTagging(this.$route.params.tag);
    this.isLoading = false;
  }
};
</script>
