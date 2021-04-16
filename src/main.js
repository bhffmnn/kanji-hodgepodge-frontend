import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const myApp = createApp(App)
myApp.use(router)

// Import all stroke order diagrams
require.context("@/assets/stroke-order/", true, /.+$/)
// Register all base components
const requireComponent = require.context("./components/", true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  myApp.component(baseComponentName, baseComponentConfig)
})
myApp.mount('#app')
