import Vue from 'vue'
import LoadingModal from './index.vue'

let LoadingModalContainer = Vue.extend(LoadingModal)

let wLoadingModal = () => {
	return new LoadingModalContainer();
}

/**
 * 支持Vue安装
 */
LoadingModalContainer.prototype.install = function (Vue) {
	Vue.prototype.$LoadingModal = new LoadingModalContainer()
}

/**
 * 定义配置值
 *
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
LoadingModalContainer.prototype.config = function (options) {
	Object.keys(options).forEach((key) => {
		this[key] = options[key]
	})
}

/**
 * 初始化
 *
 * @return {[type]} [description]
 */
LoadingModalContainer.prototype.init = function () {
	this.vm = this.$mount();
	document.body.appendChild(this.vm.$el);
	return this
}

/**
 * 启动
 *
 * @return {[type]} [description]
 */
LoadingModalContainer.prototype.start = function (theme) {
	this.init();
	if ([1, 2].includes(theme)) {
		this.theme = theme
	} else {
		this.theme = 1
	}
	this.isShow = true
};

/**
 * 完成
 *
 * @return {[type]} [description]
 */
LoadingModalContainer.prototype.finish = function (theme) {
	this.isShow || this.start(theme)
	this.isShow = false
	document.body.removeChild(this.vm.$el);
};

export default wLoadingModal()