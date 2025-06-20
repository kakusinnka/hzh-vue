import Vue from 'vue'
import App from './App.vue'

import store from './store/index.js'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  store
}).$mount('#app')

console.dir(vm.$store)