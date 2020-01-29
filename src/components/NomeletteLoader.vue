<template>
  <div class="nomelette-loader" v-if="isLoading">
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.nomelette-loader {
  min-height: 10em;
}
</style>