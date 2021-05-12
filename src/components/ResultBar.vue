<template>
  <div
    style="height: 3.2em;"
    class="flexbox f-align-center scrollable main-white main-padding main-border"
  >
    <router-link
      class="main-button main-padding-small main-round-large"
      style="flex-shrink: 0; height: 33px; width: 33px;"
      v-for="result in results"
      :key="result"
      :to="{ name: 'Home', params: { kanji: result } }"
      >{{ result }}</router-link
    >
  </div>
</template>

<script>

export default {
  props: {
    results: {
      required: false,
      type: Array,
    },
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.scrollable {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin; /* This is an experimental css feature*/
}
</style>
