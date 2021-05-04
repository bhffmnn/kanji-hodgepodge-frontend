<template>
  <div class="flexbox f-columns f-gap">
    <h5 class="main-margin-0">Nanori</h5>
    <div class="flexbox f-wrap f-gap">
      <span v-for="nanori in nanoris" :key="nanori">{{nanori}}</span>
    </div>
</div>
</template>

<script>
export default {
  props: {
    nanoris: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
</style>