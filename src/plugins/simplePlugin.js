export default {
    install(Vue) {
        Vue.prototype.$log = function() {
            console.log('simplePlugin')
        }
    }
}