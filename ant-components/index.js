import DatePicker from './MonDatePicker'
import MonthPicker from './MonMonthPicker'
import RangePicker from './MonRangePicker'
import TimePicker from './MonTimePicker'
import Video from '../components/MonVideo'
import Word from '../components/MonWord'
import Img from '../components/MonImg'
import CheckboxImg from '../components/MonCheckboxImg'
import RadioImg from '../components/MonRadioImg'
import Address from './MonAddress'
import Switch from './MonSwitch'
import Slider from './MonSlider'
import Location from '../components/MonLocation'


const components = [
    MonthPicker,
    RangePicker,
    DatePicker,
    TimePicker,
    Video,
    Word,
    Img,
    CheckboxImg,
    RadioImg,
    Address,
    Switch,
    Slider,
    Location
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
if (typeof window != "undefined" && window.Vue) {
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
// 图片单选
export const MonRadioImg = RadioImg
// 图片多选
export const MonCheckboxImg = CheckboxImg
// 地址
export const MonAddress = Address
// 开关
export const MonSwitch = Switch
// 拖动条
export const MonSlider = Slider
// 获取地理位置
export const MonLocation = Location

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
    'MonRadioImg': MonRadioImg,
    'MonCheckboxImg': MonCheckboxImg,
    'MonAddress': MonAddress,
    'MonSwitch': MonSwitch,
    'MonSlider': MonSlider,
    'MonLocation': MonLocation
}