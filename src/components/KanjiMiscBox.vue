<template>
  <div class="flexbox f-gap">
    <kanji-misc-item itemName="Radical" :itemValue="kanji.radical" />
    <div class="vertical-line"></div>
    <kanji-misc-item itemName="Strokes:" :itemValue="kanji.strokeCount.toString()" />
    <div class="vertical-line"></div>
    <kanji-misc-item itemName="Type" :itemValue="kanjiType" />
    <div class="vertical-line"></div>
    <kanji-misc-item itemName="Unicode" :itemValue="codepointHex" />    
  </div>
</template>

<script>
import KanjiMiscItem from "@/components/KanjiMiscItem"

export default {
  props: {
    kanji: {
      required: true,
      type: Object
    }
  },
  components: {
    KanjiMiscItem
  },
  computed: {
    codepointHex() {
      return "U+" + this.kanji.utf16.toString(16).toUpperCase()
    },
    kanjiType() {
      if (this.kanji.type === "nonJoyo") return "Non-Jōyō"
      else if (this.kanji.type === "joyo") return "Jōyō"
      else if (this.kanji.type === "jinmeiyo") return "Jinmeiyō"
      else return "(Jōyō)"  // (this.kanji.type === "joyoAlt")
    }
  }
}
</script>

<style>
div.vertical-line {
  width: 1px;
  background-color: #ccc;
  height: auto;
  display: inline-block; 
}
</style>