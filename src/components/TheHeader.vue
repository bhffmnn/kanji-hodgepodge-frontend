<template>
  <div>
    <header class="w3-white">
      <h1>Kanji Hodgepodge</h1>
      <nav class="flexbox-spaced">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'Privacy'}">Privacy Policy</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  flex-wrap: nowrap;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  flex-grow: 1;
}
div.vertical-line {
  width: 1px;
  background-color: #000;
  height: auto;
  display: inline-block; 
}
</style>