import BackTop from './MonBackTop';
import Carousel from './MonCarousel';
import DatePicker from './MonDatePicker';
import Dialog from './MonDialog';
import LoadingBar from './MonLoadingBar';
import LoadingModal from './MonLoadingModal';
import Music from './MonMusic';
import PageList from './MonPageList';
import Paging from './MonPaging';
import Signature from './MonSignature';
import Toastr from './MonToastr';
import Toast from './MonToast';
import Video from './MonVideo'
import Word from './MonWord'
import Img from './MonImg'
import RadioIImg from './MonRadioImg'
import CheckboxImg from './MonCheckboxImg'
import Location from './MonLocation'
import Select from './MonSelect'

const components = [
    BackTop,
    Carousel,
    DatePicker,
    Dialog,
    Music,
    PageList,
    Paging,
    Signature,
    Video,
    Word,
    Img,
    RadioIImg,
    CheckboxImg,
    Location,
    Select
];

const uses = [
    LoadingBar,
    LoadingModal,
    Toastr,
    Toast
]

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

    uses.map((use) => Vue.use(use))
}

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    _install(window.Vue);
}

// 单独导出
export const install = _install;
// 回到顶部
export const MonBackTop = BackTop;
// 走马灯轮播图
export const MonCarousel = Carousel;
// 日期选择
export const MonDatePicker = DatePicker;
// 弹窗
export const MonDialog = Dialog;
// 顶部加载条
export const MonLoadingBar = LoadingBar;
// 全屏加载层
export const MonLoadingModal = LoadingModal;
// 音乐播放器
export const MonMusic = Music;
// 移动端分页列表
export const MonPageList = PageList;
// 分页
export const MonPaging = Paging;
// 移动端签名
export const MonSignature = Signature;
// 右上角轻提示
export const MonToastr = Toastr;
// 移动端上中下轻提示
export const MonToast = Toast;
// 视频
export const MonVideo = Video
// 文字
export const MonWord = Word
// 图片
export const MonImg = Img
// 图片单选
export const MonRadioIImg = RadioIImg
// 图片多选
export const MonCheckboxImg = CheckboxImg
// 获取地理位置
export const MonLocation = Location
// select选择
export const MonSelect = Select

// 默认导出
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    'install': _install,
    'MonBackTop': MonBackTop,
    'MonCarousel': MonCarousel,
    'MonDatePicker': MonDatePicker,
    'MonDialog': MonDialog,
    'MonLoadingBar': MonLoadingBar,
    'MonLoadingModal': MonLoadingModal,
    'MonMusic': MonMusic,
    'MonPageList': MonPageList,
    'MonPaging': MonPaging,
    'MonSignature': MonSignature,
    'MonToastr': MonToastr,
    'MonVideo': MonVideo,
    'MonWord': MonWord,
    'MonImg': MonImg,
    'MonRadioIImg': MonRadioIImg,
    'MonCheckboxImg': MonCheckboxImg,
    'MonToast': MonToast,
    'MonLocation': MonLocation,
    'MonSelect': MonSelect
};