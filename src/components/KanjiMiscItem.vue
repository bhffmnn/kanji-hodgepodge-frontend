<template>
  <span class="flexbox-spaced-aligned-center"><h5>{{itemName}}</h5><span>{{itemValue}}</span></span>
</template>

<script>
export default {
  props: {
    itemName: {
      required: true,
      type: String
    },
    itemValue: {
      required: true,
      type: String
    },
  }
}
</script>

<style scoped>
h5 {
  display: inline-block;
}
.flexbox-spaced-aligned-center {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
</style>