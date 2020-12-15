import Vue from 'vue'
import LoadingBar from './loadingbar.vue'

let LoadingBarConstructor = Vue.extend(LoadingBar);
let timer = null, removeTimer = null;

let WLoadingBar = () => {
	return new LoadingBarConstructor()
};

/**
 * Vue安装
 */
LoadingBarConstructor.prototype.install = function (Vue) {
	Vue.prototype.$LoadingBar = new LoadingBarConstructor()
}

/**
 * 配置
 */
LoadingBarConstructor.prototype.config = function (options) {
	Object.keys(options).forEach((key) => {
		if (key === 'isError' || key === 'totalProgress') {
			return;
		}
		this[key] = options[key]
	})
};

/**
 * 初始化
 */
LoadingBarConstructor.prototype.init = function () {
	clearTimeout(timer);
	this.totalProgress = 0;
	this.isError = false;
	this.vm = this.$mount();
	document.body.appendChild(this.vm.$el);
	return this
};

/**
 * 开始滑动
 */
LoadingBarConstructor.prototype.start = function () {
	this.init();
	timer = setInterval(() => {
		if (this.totalProgress < 90) {
			this.totalProgress += (this.percentNum || Math.random()) * this.speed;
		}
	}, 100);
};

/**
 * 结束滑动
 */
LoadingBarConstructor.prototype.finish = function () {
	timer || this.init();
	this.totalProgress = 100;
	clearTimeout(removeTimer);
	removeTimer = setTimeout(() => {
		clearTimeout(timer);
		timer = null;
		document.body.removeChild(this.vm.$el)
	}, 200)
};

/**
 * 错误效果
 */
LoadingBarConstructor.prototype.error = function () {
	this.finish();
	this.totalProgress = 80;
	this.isError = true
};

export default WLoadingBar()