import Vue from 'vue'
import App from './App.vue'
import { plugins } from './plugins'

Vue.use(plugins, { name: 'hello' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
