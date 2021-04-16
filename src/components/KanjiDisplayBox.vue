<template>
  <div id="display-box" class="flexbox-spaced">
    <kanji-literal-box class="flex-grow-1" style="width: 220px;" :literal="this.kanji.literal"/>
    <div class="flex-grow-100 flexbox-spaced" style="flex-basis: 440px;">
      <kanji-properties-box class="flex-grow-1" :kanji="this.kanji" />
      <kanji-special-joyo-box class="flex-grow-1" :kanji="kanji" v-if="specialJoyoReadingsLength > 0"></kanji-special-joyo-box>
      <kanji-vocabulary-box class="flex-grow-1" :kanji="kanji"/>
    </div>
  </div>
</template>

<script>
import KanjiLiteralBox from "@/components/KanjiLiteralBox"
import KanjiPropertiesBox from "@/components/KanjiPropertiesBox"
import KanjiSpecialJoyoBox from "@/components/KanjiSpecialJoyoBox"
import KanjiVocabularyBox from '@/components/KanjiVocabularyBox'

export default {
  props: {
    kanji: {
      required: true,
      type: Object
    }
  },
  components: {
    KanjiLiteralBox,
    KanjiPropertiesBox,
    KanjiSpecialJoyoBox,
    KanjiVocabularyBox
  },
  computed: {
    specialJoyoReadingsLength() {
      return this.kanji.joyoAltReadings.concat(this.kanji.joyoPrefectures, this.kanji.joyoSpecialCompounds).length;
    }
  }
}
</script>

<style>
</style>