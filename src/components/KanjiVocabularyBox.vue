<template>
  <div class="w3-white w3-border w3-card w3-padding">
    <div class="w3-bar w3-white">
      <button class="w3-bar-item w3-button" @click="filterVocabulary('')">All</button>
      <button
        v-for="reading in filteredReadings"
        :key="reading.value"
        class="w3-bar-item w3-button"
        @click="filterVocabulary(reading.value)"
      >
        {{ reading.value }}
      </button>
    </div>
    <table class="w3-table">
      <tr>
        <th>Form</th>
        <th>Reading</th>
        <th>Meaning</th>
      </tr>
      <tr v-for="(vocable, vIndex) in topTenVocabulary" :key="vIndex" :class="tableRowBackgroundClass(vIndex)" >
        <td class="nowrap">{{vocable.form}}</td>
        <td class="nowrap">{{vocable.reading.value}}</td>
        <td class="flexbox-spaced">
          <div class="w3-margin-bottom" v-for="(meaning, mIndex) in vocable.meanings" :key="mIndex">
            <span v-for="(value, mValueIndex) in meaning.values" :key="mValueIndex">{{value}}<span v-if="mValueIndex < meaning.values.length - 1">; </span></span>
          </div>
        </td>
      </tr>
    </table>
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
  data() {
    return {
      filteredVocabulary: []
    }
  },
  computed: {
    filteredReadings() {
      const allReadings = this.kanji.readingsKun.concat(this.kanji.readingsOn);
      const filtered = allReadings.filter(reading => {
        const found = this.kanji.vocabulary.find(vocab => vocab.kanjiReading === reading.value);
        return found;
      });
      console.log(filtered);
      return filtered;
    },
    topTenVocabulary() {
      if (this.filteredVocabulary.length >= 10) {
        return this.filteredVocabulary.slice(0, 10);
      }
      else {
        return this.filteredVocabulary;
      }      
    }
  },
  created() {
    this.filteredVocabulary = this.kanji.vocabulary;
  },
  watch: {
    kanji: function () {
      this.filteredVocabulary = this.kanji.vocabulary;
    }
  },
  methods: {
    tableRowBackgroundClass(index) {
      if (index % 2 === 0) {
        return "dark-row";
      }
      return "";
    },
    filterVocabulary(reading) {
      if (reading === "") this.filteredVocabulary = this.kanji.vocabulary;
      else this.filteredVocabulary = this.kanji.vocabulary.filter(vocab => vocab.kanjiReading === reading);
    }
  }
};
</script>

<style scoped>
.nowrap {
  white-space: nowrap;
}
.dark-row {
  background: #f1f1f1;
}
</style>
