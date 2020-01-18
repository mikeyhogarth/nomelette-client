<template>
  <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true">
    <b-icon pack="fas" icon="cookie" size="is-large"> </b-icon>
  </b-loading>
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
