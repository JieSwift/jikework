(function() {
	//document.getElementsByClassName在ie8及其以下的兼容性
	function getClassNames(classStr, tagName) {
		if (document.getElementsByClassName) {
			return document.getElementsByClassName(classStr)
		} else {
			var nodes = document.getElementsByTagName(tagName),
				ret = [];
			for (i = 0; i < nodes.length; i++) {
				if (hasClass(nodes[i], classStr)) {
					ret.push(nodes[i])
				}
			}
			return ret;
		}
	}

	function hasClass(tagStr, classStr) {
		var arr = tagStr.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含 
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == classStr) {
				return true;
			}
		}
		return false;
	}

	// 输出框
	var inputText = document.getElementById('text');
	inputText.value = 0;
	// 数字
	var numValue = getClassNames('num', 'li');
	// var numValue = document.getElementsByClassName('num');
	// C键
	var clear = document.getElementById('clear');
	// Sin键
	var sin = document.getElementById('sin');
	// Cos键
	var cos = document.getElementById('cos');
	// 正负号
	var plusOrMinus = document.getElementById('plus-minus');
	// 倒数
	var countBack = document.getElementById('count-back');
	// 除
	var divide = document.getElementById('divide');
	// 百分号
	var spare = document.getElementById('spare');
	// 乘
	var ride = document.getElementById('ride');
	// 根号
	var sqrt = document.getElementById('sqrt');
	// 减号
	var minus = document.getElementById('minus');
	// 加号
	var add = document.getElementById('add');
	// 等号
	var equal = document.getElementById('equal');
	// 符号
	var mark;
	// 得到第一次输入的数
	var val = 0; //放置输入的值
	var xval = 0; //保存转换Number类型的值
	var sval = 0; //保存转换Number类型的值
	var isClear = false; //是否清除
	var num1 = 0; //保存第一次输入的值 
	var num2 = 0; //保存第二次输入的值    
	for (var i = 0; i < numValue.length; i++) {
		numValue[i].onclick = function() {
			if (mark) {
				xval = 0;
				val = this.innerHTML;
				sval += val; //连续输入数字(String类型)
				//转换Number类型
				num2 = parseFloat(sval);
				inputText.value = num2;
			} else {
				sval = 0;
				val = this.innerHTML;
				xval += val; //连续输入数字(String类型)
				//转换Number类型
				num1 = parseFloat(xval);
				inputText.value = num1;
			}
		}
	};
	// 加
	add.onclick = function() {
			mark = add.innerHTML;
		}
		// 减
	minus.onclick = function() {
			mark = minus.innerHTML;
		}
		// 乘
	ride.onclick = function() {
			mark = ride.innerHTML;
		}
		// 除
	divide.onclick = function() {
		mark = divide.innerHTML;
	}

	// C键
	clear.onclick = function() {
		inputText.value = 0;
		isClear = true;
		num1 = 0;
		num2 = 0;
		sval = 0;
		xval = 0;
	}

	// 等于函数
	equal.onclick = function() {
		var res = 0;
		switch (mark) {
			case "+":
				res = num1 + num2;
				break;
			case "-":
				res = num1 - num2;
				break;
			case "*":
				res = num1 * num2;
				break;
			case "/":
				res = num1 / num2;
				while (num2 == 0) {
					alert("除数不能为0！")
					break;
				}
		}
		mark = 0;
		inputText.value = parseFloat(res.toFixed(2));
	}

	// sin函数
	sin.onclick = function() {
		inputText.value = Math.sin(num1 * 2 * Math.PI / 360).toFixed(2);
	}

	// cos函数
	cos.onclick = function() {
		inputText.value = Math.cos(num1 * 2 * Math.PI / 360).toFixed(2);
	}

	// 根号
	sqrt.onclick = function() {
		inputText.value = Math.sqrt(num1).toFixed(2);
	}

	// 百分号
	spare.onclick = function() {
		mark = spare.innerHTML;
		inputText.value = num1 / 100;
	};

	// 正负号
	plusOrMinus.onclick = function() {
		num1 = -num1;
		inputText.value = num1;
	}

	// 倒数
	countBack.onclick = function() {
		num1 = 1 / num1;
		inputText.value = num1;
	}
})();