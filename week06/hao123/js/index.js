(function() {
	// 绑定变量
	// 颜色
	var colorOne = document.getElementById('color-one');
	var colorTwo = document.getElementById('color-two');
	var colorThree = document.getElementById('color-three');
	var colorFour = document.getElementById('color-four');
	var colorFive = document.getElementById('color-five');

	//导航栏
	var bodyNav = document.getElementById('body-nav');
	var navFontColor = "#fff";
	var defaultNavFontColor = "#333";
	//首页
	var navHome = document.getElementById('nav-home');
	// 背景颜色
	var bgColor = "";
	// 更换背景颜色判断
	var isSelectColor = false;
	// 更换导航颜色判断
	var isSelectNavColor = false;
	//搜索栏导航
	var inputNavClick = document.getElementById('input-nav-head');
	var inputNav = document.getElementById('input-nav');
	// 图片新闻
	var imgNews = document.getElementById('news-img-wr');
	// news文字
	var newsText = document.getElementById('news-text');
	// news上一个
	var newsPre = document.getElementById('news-pre');
	// news下一个
	var newsNext = document.getElementById('news-next');
	// 图片地址
	var imgSrc = ["images/news1.jpg", "images/news2.jpg",
		"images/news3.jpg", "images/news4.jpg", "images/news5.jpg"
	];
	HTMLElement.prototype.__defineGetter__("currentStyle", function() {
		return this.ownerDocument.defaultView.getComputedStyle(this, null);
	});
	// 使用localStorage的值
	navHome.style.backgroundColor = localStorage.getItem("color");
	bodyNav.style.borderTopColor =  localStorage.getItem("color");
	// 更换导航栏背景颜色
	colorOne.onclick = function() {
		bgColor = this.currentStyle.backgroundColor;
		navHome.style.backgroundColor = bgColor;
		bodyNav.style.borderTopColor = bgColor;
		// 存储localStorage
		localStorage.setItem("color",bgColor);
	};

	colorTwo.onclick = function() {
		bgColor = this.currentStyle.backgroundColor;
		navHome.style.backgroundColor = bgColor;
		bodyNav.style.borderTopColor = bgColor;
		// 存储localStorage
		localStorage.setItem("color",bgColor);
	};

	colorThree.onclick = function() {
		bgColor = this.currentStyle.backgroundColor;
		navHome.style.backgroundColor = bgColor;
		bodyNav.style.borderTopColor = bgColor;
		// 存储localStorage
		localStorage.setItem("color",bgColor);
	};

	colorFour.onclick = function() {
		bgColor = this.currentStyle.backgroundColor;
		navHome.style.backgroundColor = bgColor;
		bodyNav.style.borderTopColor = bgColor;
		// 存储localStorage
		localStorage.setItem("color",bgColor);
	};
	colorFive.onclick = function() {
		bgColor = this.currentStyle.backgroundColor;
		navHome.style.backgroundColor = bgColor;
		bodyNav.style.borderTopColor = bgColor;
		// 存储localStorage
		localStorage.setItem("color",bgColor);
	};
	//未完成
	// if (bodyNav.children.length) {
	// 	var nav = bodyNav.children;
	// 	bgColor = bodyNav.currentStyle.borderTopColor;
	// 	for (var i = 0; i < nav.length; i++) {
	// 		nav[i].onclick = function() {
	// 			if (!isSelectNavColor) {
	// 				this.style.backgroundColor = bgColor;
	// 				this.firstElementChild.style.color = navFontColor;
	// 				nav[0].style.backgroundColor = navFontColor;
	// 				nav[0].firstElementChild.style.color = defaultNavFontColor;
	// 				if (nav[i].onclick != this) {
	// 					isSelectNavColor = true;
	// 				}
	// 			} else {
	// 				nav[0].style.backgroundColor = bgColor;
	// 				nav[0].firstElementChild.style.color = navFontColor;
	// 			}
	// 		};
	// 	}
	// }
	//搜索栏点击事件
	var isInputNav = false;
	inputNavClick.onclick = function() {
		if (!isInputNav) {
			inputNav.style.display = "block";
			inputNavClick.innerHTML = "网页&nbsp;&#923;";
			isInputNav = true;
		} else {
			inputNav.style.display = "none";
			inputNavClick.innerHTML = "网页&nbsp;&#957;";
			isInputNav = false;
		}
	};

	// news事件
	imgNews.onmouseover = function() {
		newsPre.style.display = "block";
		newsNext.style.display = "block";
	};
	// 点击替换图片
	newsPre.onclick = function() {
		imgNews.firstElementChild.setAttribute('src', imgSrc[parseInt(Math.random()*4)]);
	};

	newsNext.onclick = function() {
		imgNews.firstElementChild.setAttribute('src', imgSrc[parseInt(Math.random()*4)]);
	};
})();