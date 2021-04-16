<template>
  <div class="w3-container w3-white w3-border w3-card w3-padding">
    <div v-if="kanji.joyoAltReadings.length > 0">
      <h5>Alternative Jōyō Readings</h5>
      <div class="flexbox-spaced">
        <span
          v-for="r in kanji.joyoAltReadings"
          :key="r.orthForm"
          >{{ r.orthForm }}（{{ r.altReading }}）</span
        >
      </div>
      <hr
        v-if="
          kanji.joyoPrefectures.length + kanji.joyoSpecialCompounds.length > 0
        "
      />
    </div>
    <div v-if="kanji.joyoPrefectures.length > 0">
      <h5>Prefecture Jōyō Readings</h5>
      <div class="flexbox-spaced">
        <span
          v-for="r in kanji.joyoPrefectures"
          :key="r.orthForm"
          >{{ r.orthForm }}（{{ r.reading }}）</span
        >
      </div>
      <hr v-if="kanji.joyoSpecialCompounds.length > 0" />
    </div>
    <div v-if="kanji.joyoSpecialCompounds.length > 0">
      <h5>Compound Jōyō Readings</h5>
      <div class="flexbox-spaced">
        <span
          v-for="r in kanji.joyoSpecialCompounds"
          :key="r.orthForm"
          >{{ r.orthForm }}（{{ r.reading }}）</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kanji: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.flexbox-spaced {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
