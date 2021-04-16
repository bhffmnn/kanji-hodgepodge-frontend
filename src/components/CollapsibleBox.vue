<template>
  <button @click="toggleCollapse()" type="button" class="collapsible">
    {{ title }}
  </button>
  <div :class="collapsedClass" class="collapsible-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      collapsed: true
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    }
  },
  computed: {
    collapsedClass() {
      if (this.collapsed) return "display-none";
      else return "";
    }
  }
};
</script>

<style scoped>
.collapsible-content {
  padding: 0 18px;
  overflow: hidden;
  background-color: white;
  border: 1px solid #ccc;
  word-wrap: normal;
}
.collapsible {
  background-color: #607d8b;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.display-none {
  display: none;
}
</style>
