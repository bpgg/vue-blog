import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)

import routes from './router/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
