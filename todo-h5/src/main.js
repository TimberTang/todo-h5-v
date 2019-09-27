import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  Router,
  store,
  render: h => h(App),
}).$mount('#app')
