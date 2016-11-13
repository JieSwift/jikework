$(document).ready(function() {
	$(window).on('load', function() {
		imgLocation();
		var imgData = {
			'data': [{
				'src': '1.jpg'
			}, {
				'src': '2.jpg'
			}, {
				'src': '3.jpg'
			}, {
				'src': '4.jpg'
			}, {
				'src': '5.jpg'
			}, {
				'src': '6.jpg'
			}, {
				'src': '10.jpg'
			}, {
				'src': '12.jpg'
			}, {
				'src': '13.jpg'
			}, {
				'src': '19.jpg'
			}, ]
		}
		window.onscroll = function() {
			if (scroll()) {
				$.each(imgData.data, function(index, value) {
					var box = $('<li>').addClass('box').appendTo($('.content'));
					var imgWr = $('<div>').addClass('img-wr').appendTo(box);
					$('<img>').attr('src', './images/' + $(value).attr('src')).appendTo(imgWr);
				});
				imgLocation();
			}
		};

		window.resize = function(){
			imgLocation();
		}
	});

});


// 滚动加载图片
function scroll() {
	var imgBox = $('.box');
	var lastImgHeight = imgBox.last().get(0).offsetTop + Math.floor(imgBox.last().height()/2);
	var documentHeight = $(document).height();
	var scrollHeight = $(window).scrollTop();
	return (lastImgHeight < scrollHeight + documentHeight) ? true : false;
}

// 排放图片
function imgLocation() {
	var imgBox = $('.box');
	var imgWidth = imgBox.eq(0).width();
	//console.log(imgWidth);
	var num = Math.floor($(window).width() / imgWidth);
	var boxArr = [];
	imgBox.each(function(index, value) {
		var boxHeight = imgBox.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
		} else {
			var minImgHeight = Math.min.apply(null, boxArr);
			var minBoxIndex = $.inArray(minImgHeight, boxArr)
			$(value).css({
				'position': 'absolute',
				'top': minImgHeight,
				'left': imgBox.eq(minBoxIndex).position().left
			});
			console.log(imgBox.eq(minBoxIndex).position().left);
			boxArr[minBoxIndex] += imgBox.eq(index).height();
		}
	});
};