import DatePicker from './MonDatePicker'
import MonthPicker from './MonMonthPicker'
import RangePicker from './MonRangePicker'
import TimePicker from './MonTimePicker'
import Video from './MonVideo'
import Word from './MonWord'
import Img from './MonImg'


const components = [
    MonthPicker,
    RangePicker,
    DatePicker,
    TimePicker,
    Video,
    Word,
    Img,
];


// vue安装方法
const _install = function (Vue) {
    // 判断是否安装
    if (_install.installed) {
        return;
    }
    // 遍历注册全局组件
    components.map((component) => {
        Vue.component(component.name, component)
    });
}

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    _install(window.Vue);
}

// 日期
export const MonDatePicker = DatePicker
// 月份
export const MonMonthPicker = MonthPicker
// 日期区间
export const MonRangePicker = RangePicker
// 时间
export const MonTimePicker = TimePicker
// 视频
export const MonVideo = Video
// 文字
export const MonWord = Word
// 图片
export const MonImg = Img

// 默认导出
export default {
    'install': _install,
    'MonDatePicker': MonDatePicker,
    'MonMonthPicker': MonMonthPicker,
    'MonRangePicker': MonRangePicker,
    'MonTimePicker': MonTimePicker,
    'MonVideo': MonVideo,
    'MonWord': MonWord,
    'MonImg': MonImg,
}