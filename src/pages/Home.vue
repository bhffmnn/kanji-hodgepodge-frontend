<template>
  <div class="flexbox-columns-spaced">
    <search-bar @searchResults="getResults"/>
    <result-bar :results="result"/>
    <div>
      <kanji-display-box v-if="kanjiObject.literal" :kanji="kanjiObject"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar' 
import ResultBar from '@/components/ResultBar'
import KanjiDisplayBox from '@/components/KanjiDisplayBox'

export default {
  props: {
    kanji: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      result: [],
      kanjiObject: {},
    }
  },
  components: {
    SearchBar,
    ResultBar,
    KanjiDisplayBox
  },
  methods: {
    getResults(searchResults) {
      this.result = searchResults;
      if (this.result.length > 0) {
        this.$router.push({ name: 'Home', params: { kanji: this.result[0] } })
        this.$router.go(1)
      }
    },
    async getKanjiObject() {
      const response = await fetch('http://localhost:5000/api/kanji/' + this.kanji);
      this.kanjiObject = await response.json();
    }
  },
  created() {
    if (this.kanji) {
      this.getKanjiObject();
    }
  },
  watch: {
    kanji: function() {
      this.getKanjiObject();
    }     
  }
}
</script>

<style>
</style>