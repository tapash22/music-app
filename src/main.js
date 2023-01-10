import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import { AVPlugin } from 'vue-audio-visual'

Vue.config.productionTip = false

new Vue({
  router,
  // AVPlugin,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
