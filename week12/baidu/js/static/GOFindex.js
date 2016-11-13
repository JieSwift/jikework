define(function(require, exports, module) {
	//通过require引入依赖
	var $ = require('jquery');

	//单例模式,只创建一个登陆框。
	//桥接模式,将实现和抽象分离
	var singleton = function(fn) {
		var result;
		return function() {
			return result || (result = fn.apply(this, arguments));
		}
	}

	//登陆框 构造函数
	function Login(width, height, pos, top, left, bg, borderRs, zIndex, className) {
		this.width = width;
		this.height = height;
		this.pos = pos;
		this.top = top;
		this.left = left;
		this.bg = bg;
		this.borderRs = borderRs;
		this.zIndex = zIndex;
		this.className = className;
	}

	//创建一个登录框
	Login.prototype.createLogin = function(dest) {
			var container = this.createDiv(dest);
			container.css({
				'width': this.width + 'px',
				'height': this.height + 'px',
				'position': this.pos,
				'top': this.top,
				'left': this.left,
				'right': this.right,
				'bottom': this.bottom,
				'margin-top': -this.height / 2 + 'px',
				'margin-left': -this.width / 2 + 'px',
				'background': this.bg,
				'border-radius': this.borderRs,
				'z-index': this.zIndex
			});
			container.addClass(this.className);
			return container;
		}
		//创建登陆框背景
	Login.prototype.createBgDiv = function(dest, pos, width, height, opacity, zIndex, bg, className, top) {
		var container = this.createDiv(dest);
		container.css({
			'width': width,
			'height': height,
			'position': pos,
			'opacity': opacity,
			'zIndex': zIndex,
			'background': bg,
			'top': top
		});
		container.addClass(className);
		return container;
	}
	Login.prototype.createDiv = function(dest) {
		var container = $('<div></div>');
		container.appendTo(dest);
		return container;
	}
	module.exports = function Login(width, height, pos, top, left, bg, borderRs, zIndex, className) {
			this.width = width;
			this.height = height;
			this.pos = pos;
			this.top = top;
			this.left = left;
			this.bg = bg;
			this.borderRs = borderRs;
			this.zIndex = zIndex;
			this.className = className;
		}
		//var $dest = $('.body-wr');
		//var login = new Login('400', '400', 'absolute', '50%', '50%','#fff','5px',600,'login-wr');
		//singleton(login.createBgDiv($dest, 'absolute', '100%', '100%', '0.8', 200, '#333', 'login-bg', 0));
		//singleton(login.createLogin($dest));
});
