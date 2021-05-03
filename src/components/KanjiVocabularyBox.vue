<template>
  <div class="flexbox f-columns f-gap main-border main-box-shadow main-padding">
    <h5 style="margin: 0">Example Vocabulary</h5>
    <div class="flexbox f-gap-small">
      <button class="main-button main-round btn-voc btn-active" @click="filterButtonAction">All</button>
      <button
        v-for="reading in filteredReadings"
        :key="reading.value"
        class="main-button main-round btn-voc"
        @click="filterButtonAction"
      >
        {{ reading.value }}
      </button>
    </div>
    <table class="main-table">
      <tr>
        <th>Form</th>
        <th>Reading</th>
        <th>Meaning</th>
      </tr>
      <tr v-for="(vocable, vIndex) in topTenVocabulary" :key="vIndex"  >
        <td class="nowrap">{{vocable.form}}</td>
        <td class="nowrap">{{vocable.reading.value}}</td>
        <td>
          <div class="flexbox f-columns f-gap">          
            <span class="flexbox f-gap-small" v-for="(meaning, mIndex) in vocable.meanings" :key="mIndex">
              <span v-if="vocable.meanings.length > 1">{{mIndex + 1}}.</span><span><span v-for="(value, mValueIndex) in meaning.values" :key="mValueIndex">{{value}}<span v-if="mValueIndex < meaning.values.length - 1">; </span></span></span>
            </span>
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
    filterButtonAction(e) {
      this.filterVocabulary(e.target.textContent);
      this.$el.querySelectorAll(".btn-voc").forEach(el => el.classList.remove("btn-active"))
      e.target.classList.add("btn-active")      
    },
    tableRowBackgroundClass(index) {
      if (index % 2 === 0) {
        return "dark-row";
      }
      return "";
    },
    filterVocabulary(reading) {
      if (reading === "All") this.filteredVocabulary = this.kanji.vocabulary;
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
table {
    border-collapse: collapse;
    border-style: hidden;
}
table td, table th {
    border-bottom: 1px solid #ccc;
}
.btn-active {
  border: 1px solid #ccc !important;
}
.btn-voc {
   border: 1px solid white;
}
</style>
