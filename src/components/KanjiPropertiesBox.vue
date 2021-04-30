<template>
<div class="flex-columns gap-tiny">
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
  <div class="flexbox gap-small padding-medium-sides">
    <span class="flexbox gap-tiny">
      <span class="joyo-example"></span>
      <span>Jōyō reading</span>
    </span>    
    <span class="flexbox gap-tiny">
      <span class="special-use-example"></span>
      <span>Jōyō reading with special / limited use</span>    
    </span>
    <span class="flexbox gap-tiny">
      <span class="on-tag-example"></span>
      <span>On-reading type</span>
    </span>    
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
<style scoped>
.gap-small {
  gap: 10px;
}
.gap-tiny {
  gap: 5px;
}
.flexbox {
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.flex-columns {
  display: flex;
  flex-direction: column;
}
.joyo-example {
  width: 12px;
  border-top: 2px solid #ccc;
}
.special-use-example {
  width: 12px;
  border-top: 2px dotted #ccc;
}
.reading-span {
  padding: 5px;
}
.on-tag-example {
  background-color: #607d8b;
  width: 10px;
  height: 10px;
  border-radius: 32px;  
}
.padding-medium-sides {
  padding-left: 16px;
  padding-right: 16px;
}
</style>