import Vue from 'vue'
import App from './App.vue'

import SearchMixin from './components/mixins/search'

Vue.mixin(SearchMixin)

new Vue({
  render: h => h(App),
  el: '#app',
})

