<template>
<div class="flexbox f-columns f-gap">
  <div class="flexbox f-wrap f-gap">
    <button class="main-button main-border main-round" @click="toggleComponentSearchVisibilty">Parts</button>
    <div class="main-border main-round-large main-padding-small flex-grow-1">
      <form class="flexbox f-align-center">
        <input v-model="text" type="text" placeholder="漢字, オンヨミ, くんよみ, meaning">
        <button class="flex-shrink-0 main-button main-blue-grey main-round-large" @keyup.enter.prevent="search" @click.prevent="search" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div v-show="showComponentSearch" class="main-border main-round main-padding">
    <component-search @componentSearchChoose="setText" />
  </div>
</div>

  
</template>

<script>
import ComponentSearch from "@/components/ComponentSearch"
import {isHiragana, isKatakana, notCJK} from "@/util/cjk_util"

export default {
  components: {
    ComponentSearch
  },
  data () {
    return {
      text: "",
      showComponentSearch: false,
    }
  },
  methods: {
    toggleComponentSearchVisibilty() {
      this.showComponentSearch = !this.showComponentSearch
    },
    setText(text) {
      this.text = text;
    },
    async search() {
      const searchInput = this.text;
      let kunSearch = "";
      let onSearch = "";
      let literalSearch = "";
      let meaningSearch = "";
      for (let s of searchInput.split(",")) {
          if (isHiragana(s)) {
              kunSearch = s;
          }
          else if (isKatakana(s)) {
              onSearch = s;
          }
          else if (notCJK(s)) {
              meaningSearch = s;
          }
          else if (s.length < 3) {
              literalSearch = s;
          }
          else {
              console.log(s + " is not a valid search item."); 
          }
      }
      if (kunSearch || onSearch || literalSearch || meaningSearch) {
          let queryString = "";
          if (kunSearch) queryString = "kun=" + kunSearch;
          if (onSearch) queryString += "on=" + onSearch;
          if (literalSearch) queryString += "literal=" + literalSearch;
          if (meaningSearch) queryString += "meaning=" + meaningSearch;  
      
          const response = await fetch('http://localhost:5000/api/kanji?' + queryString);
          let results = await response.json();
          this.$emit("searchResults", results.map(kanji => kanji.literal));
      }
      else {
        this.$emit("searchResults", [])
      }
    }   
  }
}
</script>

<style scoped>
input {
  margin-left: 10px;
  width: 100%;
  border: none;
}
input:focus {
  outline: none;
}
</style>