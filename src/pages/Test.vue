<template>
  <div class="flexbox gap-small">
    <span class="flexbox gap-tiny">
      <span class="joyo"></span>
      <span class="font-10px">Joyo reading</span>
    </span>    
    <span class="flexbox gap-tiny">
      <span class="special-use"></span>
      <span class="font-10px">Joyo reading with special / limited use</span>    
    </span>
    <span class="flexbox gap-tiny">
      <span class="on-tag-example"></span>
      <span class="font-10px">On-reading type</span>
    </span>    
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.font-10px {
  font-size: 1px;
}
.gap-small {
  gap: 10px;
}
.gap-tiny {
  gap: 5px;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  width: 12px;
  height: 12px;
  border-radius: 32px;  
}
</style>
