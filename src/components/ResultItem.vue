<template>
  <router-link class="w3-button w3-padding-small w3-round-xxlarge" :to="{name: 'Home', params: {kanji: result}}">{{this.result}}</router-link>
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