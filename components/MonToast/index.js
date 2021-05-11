import './index.less';
export default {
	// 版本
	version: '1.0.0',
	// 避免重复install，设立flag
	installed: false,
	// 默认配置
	options: {
		// 默认显示位置
		type: "center",
		// 默认持续时间
		duration: "2000"
	},
	// Vue安装
	install(Vue, options) {
		if (this.installed) return;
		// 使用options的配置
		for (let i in options) {
			this.options[i] = options[i]
		}
		// 挂载到$Toast上
		Vue.prototype.$Toast = this
		this.installed = true;
	},
	// 发送信息
	send(message, opt = {}) {
		// 如果有传type，位置则设为该type
		let chooseType = opt.type ? opt.type : this.options.type;
		let duration = opt.duration ? opt.duration : this.options.duration;
		let onClose = opt.onClose ? opt.onClose : () => {}
		// 如果页面有toast则不继续执行
		if (document.querySelector('.mon-toast')) {
			return;
		}
		// 1、创建构造器，定义好提示信息的模板
		let toastTip = Vue.extend({
			template: `<div class="mon-toast mon-toast-${chooseType} mon-fadeIn">${message}</div>`
		});
		// 2、创建实例，挂载到文档以后的地方
		let tpl = new toastTip().$mount().$el;
		// 3、把创建的实例添加到body中
		document.body.appendChild(tpl);
		// 4、到期移除元素
		setTimeout(() => {
			document.body.removeChild(tpl);
			onClose()
		}, duration);
		//阻止遮罩滑动
		document.querySelector("div.mon-toast").addEventListener("touchmove", function (e) {
			e.stopPropagation();
			e.preventDefault();
		});
	}
};