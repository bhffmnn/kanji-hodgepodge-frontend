<template>
  <span class="flexbox f-wrap f-gap f-align-baseline"><h5>{{itemName}}</h5><span>{{itemValue}}</span></span>
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


</style>