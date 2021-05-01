<template>
  <router-link class="main-button main-padding-small main-round-large" :to="{name: 'Home', params: {kanji: result}}">{{this.result}}</router-link>
</template>

<script>
export default {
  props: {
    result: {
      require: true,
      type: String
    }
  }
}
</script>
<style>

</style>