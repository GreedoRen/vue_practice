export default {
    install(Vue) {
        Vue.prototype.slog = function(methodOptions) {
            console.log('simplePlugin')
        }
    }
}