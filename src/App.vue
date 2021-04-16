<template>
  <div id="main-box">
    <the-header/>
    <router-view/>
    <div class="footer">
      <p>Kanji and vocabulary data on this site is derived from third party sources. See the <router-link :to="{name: 'About'}">About page</router-link> for sources and licenses.</p>
    </div>  
  </div>  
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
#app {
  height: 100%;
}
#main-box {
  max-width: 1000px;
  margin-top :800;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
* {
  font-family : 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', '游ゴシック', '游ゴシック体', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo, 'ＭＳ ゴシック', 'MS Gothic', HiraKakuProN-W3, 'TakaoExゴシック', TakaoExGothic, 'MotoyaLCedar', 'Droid Sans Japanese', sans-serif;
}
@import url("https://www.w3schools.com/w3css/4/w3.css");
.mincho {
    font-family : 'ヒラギノ明朝 ProN', 'Hiragino Mincho ProN', '游明朝', '游明朝体', YuMincho,'Yu Mincho', 'ＭＳ 明朝', 'MS Mincho', HiraMinProN-W3, 'TakaoEx明朝', TakaoExMincho, 'MotoyaLCedar', 'Droid Sans Japanese', serif;    
}
html, body {
  color:#000!important;
  
  height: 100%!important;
  position: relative;
}
.flex-grow-100 {
  flex-grow: 100;
}
.flex-grow-1 {
  flex-grow: 1;
}
.flexbox-spaced {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.footer {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: center;
}
.flexbox-columns-spaced {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
