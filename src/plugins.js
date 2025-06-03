export const plugins = {
    install(Vue, options) {
        Vue.prototype.hello = function () {
            console.dir(options)
        }
    }
}