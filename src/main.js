import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SimplePlugin from './plugins/simplePlugin'

import marked from 'marked'
// import {filter} from 'core-js/fn/array'

Vue.use(SimplePlugin)
Vue.use(VueRouter)
Vue.filter('marked', marked)

new Vue({
  render: h => h(App),
  el: '#app'
})

