import ScrollHandler from '../mixins/scrollHandler'

export default {
    install(Vue) {
        Vue.mixin(ScrollHandler),

        Vue.prototype.$log = function() {
            console.log('simplePlugin')
        }
    }
}