<template>
  <div>
    <div id="component-search-results" class="flexbox f-wrap main-border-bottom">
      <button class="main-button main-padding-small main-round-large" @click="emitLiteral" v-for="literal in literals" :key="literal">{{ literal }}</button>
    </div>
    <div id="component-list" class="flexbox f-wrap">
      <template v-for="number in componentStrokeNumbers" :key="number">
        <span class="component-list-item main-blue-grey">{{number}}</span>
        <button
        class="main-button main-padding-small component-list-item"
        @click="selectComponent"
        :id="cs.component"
        v-for="cs in components.filter(c => c.strokeCount === number)"
        :key="cs.component"
        >
        {{ cs.component }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import components from "@/assets/data/krad_components.json";

export default {
  data() {
    return {
      disabledComponents: [],
      selectedComponents: [],
      components,
      literals: [],
      isLoading: false,
      componentStrokeNumbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,17]
    };
  },
  methods: {
    async selectComponent(e) {
      if (!this.isLoading) {
        this.isLoading = true;

        if (e.target.classList.contains("selectedComponent")) {
          e.target.classList.remove("selectedComponent");
          this.selectedComponents.splice(
            this.selectedComponents.indexOf(e.target.id),
            1
          );
          if (this.selectedComponents.length === 0) {
            this.disabledComponents = [];
            this.literals = [];
          } else {
            const response = await fetch(
              `https://${process.env.VUE_APP_API_PATH}` +
              `/api/krad?components=${this.selectedComponents.join("")}`
            );
            const results = await response.json();
            this.disabledComponents = results.impossibleComponents;
            this.literals = results.literals;
          }
        } else if (!e.target.classList.contains("disabledComponent")) {
          e.target.classList.add("selectedComponent");
          this.selectedComponents.push(e.target.id);
          const response = await fetch(
            `https://${process.env.VUE_APP_API_PATH}` +
            `/api/krad?components=${this.selectedComponents.join("")}`
          );
          const results = await response.json();
          this.disabledComponents = results.impossibleComponents;
          this.literals = results.literals;
        }
        this.isLoading = false;
      }
    },
    emitLiteral(e) {
      const literal = e.target.innerText
      console.log(literal)
      this.$emit("componentSearchChoose", literal)
    }
  },
  watch: {
    disabledComponents: function() {
      const componentElements = Array.from(
        this.$el.querySelector("#component-list").childNodes
      ).filter(
        (node) =>
          node.nodeName !== "#text" &&
          !node.classList.contains("selectedComponent")
      );
      for (const componentElement of componentElements) {
        if (this.disabledComponents.includes(componentElement.id)) {
          componentElement.classList.add("disabledComponent");
          componentElement.disabled = true;
        } else if (!componentElement.classList.contains("selectedComponent")) {
          componentElement.classList.remove("disabledComponent");
          componentElement.disabled = false;
        }
      }
    },
  },
};
</script>

<style scoped>
#component-search-results {
  overflow-y: auto;
  height: 4em;
  margin-bottom: 10px;
  align-items: flex-start;
}
.component-list-item {
  width: 2em;
  height: 2em;
  padding: 4px 8px;
  vertical-align: middle;
  text-align: center;
}
.disabledComponent {
  background-color: #bbb;
}
.selectedComponent {
  background-color: yellow;
}
</style>
