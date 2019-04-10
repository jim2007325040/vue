import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import utils from './utils'

Vue.config.productionTip = false
//全局注册axios
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
Vue.prototype.$utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
