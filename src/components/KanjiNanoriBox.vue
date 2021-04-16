<template>
  <div>
    <h5>Nanori</h5>
    <div class="flexbox-spaced">
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
.flexbox-spaced {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>