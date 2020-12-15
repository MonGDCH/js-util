// 音乐播放器
import music from './index.vue'

music.install = function (Vue) {
    Vue.component(music.name, music)
}

export default music
