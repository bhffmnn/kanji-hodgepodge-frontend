<template>
  <div class="w3-white w3-border w3-card w3-padding">
    <kanji-misc-box :kanji="kanji"/>
    <hr>
    <kanji-readings-on-box :readingsOn="kanji.readingsOn" />
    <hr>
    <kanji-readings-kun-box :readingsKun="kanji.readingsKun" />
    <hr>
    <kanji-meanings-box :meanings="kanji.meaningsEn" />
    <div v-if="kanji.nanoris.length > 0">
      <hr>
      <kanji-nanori-box :nanoris="kanji.nanoris" />
    </div>
    <div v-if="kanji.variants.length > 0">
      <hr>
      <kanji-variants-box :variants="kanji.variants" />
    </div>  
    
  </div>
</template>

<script>
import KanjiReadingsOnBox from "@/components/KanjiReadingsOnBox"
import KanjiReadingsKunBox from "@/components/KanjiReadingsKunBox"
import KanjiMeaningsBox from "@/components/KanjiMeaningsBox"
import KanjiNanoriBox from "@/components/KanjiNanoriBox"
import KanjiMiscBox from "@/components/KanjiMiscBox"
import KanjiVariantsBox from "@/components/KanjiVariantsBox"

export default {
  props: {
    kanji: {
      required: true,
      type: Object
    }
  },
  components: {
    KanjiReadingsOnBox,
    KanjiReadingsKunBox,
    KanjiMeaningsBox,
    KanjiNanoriBox,
    KanjiMiscBox,
    KanjiVariantsBox
  }
}
</script>
<style>
</style>