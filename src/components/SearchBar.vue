<template>
<div class="flexbox-columns-spaced">
  <div class="flexbox-spaced">
    <button class="w3-button w3-border w3-round" @click="toggleComponentSearchVisibilty">Parts</button>
    <div class="w3-border w3-round-xxlarge tiny-padding flex-grow-1">
      <form class="flexbox">
        <input class="" v-model="text" type="text" placeholder="漢字, オンヨミ, くんよみ, meaning">
        <button class="w3-button w3-blue-grey w3-round-xxlarge" @keyup.enter.prevent="search" @click.prevent="search" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div v-show="showComponentSearch" class="w3-border w3-round small-padding">
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
.tiny-padding {
  padding: 4px;
}
.small-padding {
  padding: 8px;
}
.flexbox {
  display: flex;
  align-items: center;
}
input {
  margin-left: 10px;
  width: 100%;
  border: none;
}
input:focus {
  outline: none;
}
</style>