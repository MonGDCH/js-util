import BackTop from './backTop';
import Carousel from './carousel';
import DatePicker from './datepicker';
import Dialog from './dialog';
import LoadingBar from './loadingbar';
import LoadingModal from './loadingmodal';
import Music from './music';
import PageList from './pageList';
import Paging from './paging';
import Signature from './signature';
import Toastr from './toastr';
import Video from '../ant-components/MonVideo'
import Word from '../ant-components/MonWord'
import Img from '../ant-components/MonImg'

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
    Img
];

const uses = [
    LoadingBar,
    LoadingModal,
    Toastr
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
// 视频
export const MonVideo = Video
// 文字
export const MonWord = Word
// 图片
export const MonImg = Img


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
};