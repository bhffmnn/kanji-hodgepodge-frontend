<template>
  <div class="flexbox f-columns f-gap main-border main-box-shadow main-padding">
    <div class="flexbox f-columns f-gap" v-if="kanji.joyoAltReadings.length > 0">
      <h5 class="main-margin-0">Alternative Jōyō Readings</h5>
      <div class="flexbox f-wrap f-gap">
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
    <div class="flexbox f-columns f-gap" v-if="kanji.joyoPrefectures.length > 0">
      <h5 class="main-margin-0">Prefecture Jōyō Readings</h5>
      <div class="flexbox f-wrap f-gap">
        <span
          v-for="r in kanji.joyoPrefectures"
          :key="r.orthForm"
          >{{ r.orthForm }}（{{ r.reading }}）</span
        >
      </div>
      <hr v-if="kanji.joyoSpecialCompounds.length > 0" />
    </div>
    <div class="flexbox f-columns f-gap" v-if="kanji.joyoSpecialCompounds.length > 0">
      <h5 class="main-margin-0">Compound Jōyō Readings</h5>
      <div class="flexbox f-wrap f-gap">
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
</style>
