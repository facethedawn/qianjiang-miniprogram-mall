import App from './App'
import store from './store'
import { install as http } from "./uni_modules/gt-axios-request/js_sdk/install"




// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'
export const app = new Vue({
    store,
    ...App
})
Vue.use(http)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif
