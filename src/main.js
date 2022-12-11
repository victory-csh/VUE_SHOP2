import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(ElementUI)

new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App)
}).$mount('#app')
