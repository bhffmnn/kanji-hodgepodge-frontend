<template>
  <div style="min-height: 3.2em;" class="scrollable w3-white w3-padding w3-border">
    <result-item v-for="result in results" :key="result" :result="result" />
  </div>  
</template>

<script>
import ResultItem from "@/components/ResultItem"

export default {
  props: {
    results: {
      required: false,
      type: Array
    }
  },
  components: {
    ResultItem
  }
}
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