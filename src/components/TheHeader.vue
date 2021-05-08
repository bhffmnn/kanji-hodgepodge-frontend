<template>
  <div>
    <header style="flex-wrap: wrap-reverse;" class="flexbox f-align-center f-justify-space-between f-gap">
      <h1 class="flex-grow">Kanji Hodgepodge</h1>
      <nav class="flexbox f-justify-end f-gap flex-grow">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'Privacy'}">Privacy</router-link>
      </nav>  
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>