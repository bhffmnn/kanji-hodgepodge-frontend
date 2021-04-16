<template>
  <div style="display: flex;">
    <kanji-misc-item itemName="Radical" :itemValue="kanji.radical" />
    <div class="vertical-line w3-margin-left w3-margin-right"></div>
    <kanji-misc-item itemName="Strokes:" :itemValue="kanji.strokeCount.toString()" />
    <div class="vertical-line w3-margin-left w3-margin-right"></div>
    <kanji-misc-item itemName="Type" :itemValue="kanjiType" />
    <div class="vertical-line w3-margin-left w3-margin-right"></div>
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
  width: 1px; /* Line width */
  background-color: #eee; /* Line color */
  height: auto; /* Override in-line if you want specific height. */
  display: inline-block; 
}
</style>