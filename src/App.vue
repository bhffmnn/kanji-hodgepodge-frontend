<template>
  <div class="flexbox f-columns flex-grow" id="main-box">
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
  display: flex;
  justify-content: center;
  height: 100%;
}
#main-box {
  max-width: 1000px;
  margin-top : 800;
  padding-left: 10px;
  padding-right: 10px;
}
* {
  font-family : 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', '游ゴシック', '游ゴシック体', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo, 'ＭＳ ゴシック', 'MS Gothic', HiraKakuProN-W3, 'TakaoExゴシック', TakaoExGothic, 'MotoyaLCedar', 'Droid Sans Japanese', sans-serif;
}
@import url("./assets/stylesheets/main.css");
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
.footer {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: center;
}
</style>
