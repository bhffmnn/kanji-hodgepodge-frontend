<template>
  <div>
    <h5>Variants</h5>
    <div class="flexbox f-wrap f-gap">
      <span class="flexbox f-gap-small" v-for="variant in variants" :key="variant">
        <span class="main-padding-sides-small main-blue-grey main-round-large">{{getTypeName(variant.type)}}</span>      
        <span>{{variant.literal}}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    variants: {
      required: true,
      type: Array
    }
  },
  methods: {
    getTypeName(type) {
      if (type === "joyoOld" || type === "kTraditionalVariant") {
        return "Traditional";
      } 
      if (type === "joyoAlternative") {
        return "Jōyō Alternative"
      }
      if (type === "joyoStandard") {
        return "Jōyō Standard"
      }
      else return "Simplified" // type === "joyoNew" or "kSimplifiedVariant"
    }
  }
}
</script>

<style>

</style>