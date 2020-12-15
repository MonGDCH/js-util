import page from './index.vue'

page.install = function (Vue) {
    Vue.component(page.name, page)
}

export default page
