<template>
  <div class="flexbox f-columns f-gap">
    <search-bar @searchResults="getResults" />
    <result-bar :results="result" />
    <div>
      <kanji-display-box v-if="kanjiObject.literal" :kanji="kanjiObject" />
      <div v-else>
        <h4>Two methods to search:</h4>
        <ol class="flexbox f-columns f-gap">
          <li>
            <b>By text:</b> Type a single kanji, an on-reading in katakana, a
            kun-reading in hiragana or an English meaning into the search bar
            and hit 'Search'. If your search term yields multiple results you
            can choose the desired character from the box below the search bar.
          </li>
          <li>
            <b>By components:</b> Click on 'Parts' to open the component search
            box. Choose the components the kanji you're searching for is
            composed of, choose the desired character from the results that are
            displayed above and hit 'Search'.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ResultBar from "@/components/ResultBar";
import KanjiDisplayBox from "@/components/KanjiDisplayBox";

export default {
  props: {
    kanji: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      result: [],
      kanjiObject: {},
    };
  },
  components: {
    SearchBar,
    ResultBar,
    KanjiDisplayBox,
  },
  methods: {
    getResults(searchResults) {
      this.result = searchResults;
      if (this.result.length > 0) {
        this.$router.push({ name: "Home", params: { kanji: this.result[0] } });
        this.$router.go(1);
      }
    },
    async getKanjiObject() {
      const response = await fetch(
        "http://localhost:5000/api/kanji/" + this.kanji
      );
      this.kanjiObject = await response.json();
    },
  },
  created() {
    if (this.kanji) {
      this.getKanjiObject();
    }
  },
  watch: {
    kanji: function() {
      this.getKanjiObject();
    },
  },
};
</script>

<style></style>
