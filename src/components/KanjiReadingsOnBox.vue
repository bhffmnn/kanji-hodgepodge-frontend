<template>
  <div class="flexbox f-columns f-gap">
    <h5>On-Readings</h5>
    <div class="flexbox f-wrap f-gap">
      <span v-if="readingsOn.length === 0">–</span>
      <span class="reading-span flexbox f-gap-small" v-for="reading in readingsOn" :key="reading" :class="getReadingClass(reading)">
        <span v-for="type in reading.types" :key="type" class="main-padding-sides-small main-blue-grey main-round-large">{{getTypeName(type)}}</span>
        {{reading.value}}      
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    readingsOn: {
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
    },
    getTypeName(type) {
      if (type === "go") return "Go";
      if (type === "kan") return "Kan";
      if (type === "to") return "Tō";
      else return "Kanyō"; // type === kanyo
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