import App from './index.vue'

App.install = function (Vue) {
    Vue.component(App.name, App)
}

export default App
