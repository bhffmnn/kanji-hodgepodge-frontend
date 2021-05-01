<template>
  <div>
    <div class="main-white flexbox f-columns f-align-center main-border main-padding main-box-shadow" >
      <span id="character-container">
        <img id="stoke-order-diagram" v-if="strokesAvailable" v-show="font === 'strokes'" alt="Stroke Order Diagram" :src="strokeSvgPath">
      </span>
        <span style="font-size: 100px" :class="font">{{literal}}</span>      
      <div>
        <button id="btn-mincho" class="btn-active main-button main-padding-small btn-medium-grey main-font-size-tiny" @click="mincho">Mincho</button>
        <button id="btn-gothic" class="main-button main-padding-small btn-medium-grey main-font-size-tiny" @click="gothic">Gothic</button>
        <button id="btn-strokes" class="main-button main-padding-small btn-medium-grey main-font-size-tiny" :disabled="!strokesAvailable" @click="strokes">Strokes</button>
      </div>
    </div>
  </div> 
</template>

<script>
import kanjiVGCodepoints from "@/assets/data/kanjivg_codepoints.json"

export default {
  props: {
    literal: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      font: "mincho",
      strokesAvailable: false,
      kanjiVGCodepoints,
      strokeSvgPath: ""
    }
  },
  methods: {
    mincho(e) {
      if (!e.target.classList.contains("btn-active")) {
        this.$el.querySelector("#btn-gothic").classList.remove("btn-active")
        this.$el.querySelector("#btn-strokes").classList.remove("btn-active")
        e.target.classList.add("btn-active")
      }
      this.font = "mincho"  
    },
    gothic(e) {
      if (!e.target.classList.contains("btn-active")) {
        this.$el.querySelector("#btn-mincho").classList.remove("btn-active")
        this.$el.querySelector("#btn-strokes").classList.remove("btn-active")
        e.target.classList.add("btn-active")
      }
      this.font = "gothic"
    },
    strokes(e) {
      if (!e.target.classList.contains("btn-active")) {
        this.$el.querySelector("#btn-gothic").classList.remove("btn-active")
        this.$el.querySelector("#btn-mincho").classList.remove("btn-active")
        e.target.classList.add("btn-active")
      }
      this.font = "strokes"
    },
    literalToCodepointString(literal) {
      let codepointString = literal.codePointAt(0).toString(16);
      if (codepointString.length < 5) {
        codepointString = "0" + codepointString;
      }
      return codepointString
    }
  },
  created() {
    this.strokesAvailable = this.kanjiVGCodepoints.includes(this.literal.codePointAt(0))
    if (this.strokesAvailable) {
      this.strokeSvgPath = require("@/assets/stroke-order/" + this.literalToCodepointString(this.literal) + ".svg")      
    }
  },
  watch: {
    literal: function () {
      this.strokesAvailable = this.kanjiVGCodepoints.includes(this.literal.codePointAt(0))
      if (this.strokesAvailable) {
        this.strokeSvgPath = require("@/assets/stroke-order/" + this.literalToCodepointString(this.literal) + ".svg")      
      }
      else if (this.font === "strokes") {
        this.font = "mincho"
        this.$el.querySelector("#btn-gothic").classList.remove("btn-active")
        this.$el.querySelector("#btn-strokes").classList.remove("btn-active")
        this.$el.querySelector("#btn-mincho").classList.add("btn-active")
      }
    }
  }
}
</script>

<style scoped>
#character-container {
  position: relative;
}
#stoke-order-diagram {
  width: 125px;
  position: absolute;
  left: -62.5px;
  top: 10px;
}
.strokes {
  visibility: hidden;
}
.btn-medium-grey {
  background-color: #ccc!important;
  color: black!important;
}
.btn-active {
  background-color: #607d8b!important;
  color: #fff!important;
}
</style>