import Vue from 'vue'
import App from './App.vue'
import SimplePlugin from './plugins/simplePlugin'

Vue.use(SimplePlugin)

new Vue({
  render: h => h(App),
  el: '#app'
})

