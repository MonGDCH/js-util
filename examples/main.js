import Vue from 'vue'
import App from './App.vue'

// import BackTop from 'components/backTop';
// import carousel from 'components/carousel';
// import datepicker from 'components/datepicker';
// import dialog from 'components/dialog';
// import loadingbar from 'components/loadingbar';
// import LoadingModal from 'components/loadingmodal';
// import music from 'components/music';
// import pageList from 'components/pageList';
// import paging from 'components/paging';
// import signature from 'components/signature';
// import toastr from 'components/toastr';


// Vue.use(BackTop)
// Vue.use(carousel)
// Vue.use(datepicker)
// Vue.use(dialog)
// Vue.use(loadingbar)
// Vue.use(LoadingModal)
// Vue.use(music)
// Vue.use(pageList)
// Vue.use(paging)
// Vue.use(signature)
// Vue.use(toastr)


// import monComponent from 'components'
// Vue.use(monComponent)
// console.log(monComponent)

// import {monBackTop} from 'components'
// console.log(monBackTop)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd)

Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')
