<template>
  <div>
    <h5>Meanings</h5>
    <div class="flexbox-spaced">
      <span v-if="meanings.length === 0">–</span>
      <span v-for="(meaning, index) in meanings" :key="index">{{meaning}}<span v-if="index < meanings.length - 1">; </span> </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meanings: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
.flexbox-spaced {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>