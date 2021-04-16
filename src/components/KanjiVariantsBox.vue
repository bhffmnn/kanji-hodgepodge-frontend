<template>
  <div>
    <h5>Variants</h5>
    <div class="flexbox-spaced">
      <span v-for="variant in variants" :key="variant">
        <span class="w3-tag w3-blue-grey w3-round-xxlarge">{{getTypeName(variant.type)}}</span>      
        {{variant.literal}}
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