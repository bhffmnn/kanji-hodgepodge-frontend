<template>
  <div class="flexbox f-columns f-gap">
    <h5 style="margin: 0">Kun-Readings</h5>
    <div class="flexbox f-wrap f-gap">
      <span v-if="readingsKun.legnt === 0">–</span>
      <span class="reading-span" v-for="reading in readingsKun" :key="reading" :class="getReadingClass(reading)">{{reading.value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    readingsKun: {
      required: true,
      type: Array
    }
  },
  methods: {
    getReadingClass(reading) {
      let classString = "";
      if (reading.isJoyo) {
        classString = "joyo";
        if (reading.specialUse) {
          classString += " special-use";
        }
      }
      return classString;
    } 
  }
}
</script>

<style scoped>
.joyo {
  border-radius: 32px;
  border: 2px solid #ccc;
}
.special-use {
  border-style: dotted;  
}
.reading-span {
  padding: 5px;
}
</style>