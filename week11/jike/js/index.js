$(function() {
    // 搜索栏事件
    //搜索栏
    var searchText = $('.search-text-wr');
    //搜索栏提示快
    var inputText = $('.input-text-wr');
    // 搜索按钮
    var inputBtn = $('.headsearch button');
    // 搜索栏事件
    searchText.on('focusin', function() {
        inputText.hide();
        inputBtn.css('background', '#35b558');
        inputBtn.css('color', '#fff');
    });

    searchText.on('focusout', function() {
        inputText.show();
        inputBtn.css('background', 'none');
        inputBtn.css('color', '#333');
    });


    // 头部nav事件
    // 导航栏hover事件
    // nav元素
    var navBox = $('.nav-box');
    //nav子栏
    var childNav = $('.child-nav-box');
    // hover显示隐藏nav事件
    navBox.hover(
        function() {
            childNav.show();
        },
        function() {
            childNav.hide();
        });

    childNav.hover(
        function() {
            childNav.show();
        },
        function() {
            childNav.hide();
        });

    $('.article-nav li').hover(
        function() {
            $('.article-nav .child-nav-aside').show();
        },
        function() {
            $('.article-nav .child-nav-aside').hide();
        });
    $('.article-nav .child-nav-aside').hover(
        function() {
            $('.article-nav .child-nav-aside').show();
        },
        function() {
            $('.article-nav .child-nav-aside').hide();
        });

    // 轮播图
    //滚动广告
    var len = $(".bottom-line > li").length;
    var index = 0; //图片序号
    var adTimer;
    $(".bottom-line li").mouseover(function() {
        index = $(".bottom-line li").index(this);
        //获取鼠标悬浮 li 的index
        showImg(index);
    }).eq(0).mouseover();
    //滑入停止动画，滑出开始动画.
    $('.index-baner').hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            index++;
            if (index == len) {
                //最后一张图片之后，转到第一张
                index = 0;
            }
            showImg(index)
        }, 3000);
    }).trigger("mouseleave");

    function showImg(index) {
        var adwidth = $(".index-baner>ul>li:first").width();
        $(".img-wr").stop(true, false).animate({
            "left": -adwidth * index + "px"
                //改变 left 属性的值达到轮播的效果
        }, 1000);
        $(".bottom-line li").removeClass("on-line")
            .eq(index).addClass("on-line");
    }

    $('.index-baner .pre-img').on('click', function() {
        if (index == 0) {
            index = len;
        }
        index--;
        showImg(index);
    });

    $('.index-baner .next-img').on('click', function() {
        index++;
        if (index == len) {
            index = 0;
        }
        showImg(index);
    });

    // focus lesson
    //work-next 用absolute不触发click事件？？
    var _index5 = 0;
    $('.work-next').on('click', function() {
    	console.log($('.focus-work-wr .work-next'));
        _index5++;
        var len = $(".focus-work li").length;
        if (_index5 + 5 > len) {
            $(".focus-work-wr .focus-work").stop().append($(".focus-work-wr .focus-work").html());

        }
        $(".focus-work-wr .focus-work").stop().animate({
            'left': -_index5 * 186.5 + 'px'
        }, 1000);
    });

    $(".focus-work-wr .work-pre").on('click', function() {
        if (_index5 == 0) {
            $(".focus-work-wr .focus-work").prepend($(".focus-work-wr .focus-work").html());
            $(".focus-work-wr .focus-work").css("left", "-561px");
            _index5 = 6
        }
        _index5--;
        $(".focus-work-wr .focus-work").stop().animate({ 'left': -_index5 * 186.5 + 'px' }, 1000);
    });

    // recommend
    function showMoveEvent(subEle, typeEle, moveList) {
        moveList.show();
        subEle.show();
        typeEle.show();
    };


    // moveList
    var moveList = $('.move-list');
    var typeList = $('.type-list');

    var moveQuestion = $('.move-question');
    var question = $('.content .question');
    var typeQuestion = $('.type-list .question');

    var moveKiki = $('.move-wiki');
    var recommendWiki = $('#recommendWiki');
    var typeKiki = $('.type-list .wiki');

    var moveLesson = $('.move-lesson');
    var recommendLesson = $('#recommendLesson');
    var typeLesson = $('.type-list .lesson');

    var moveScene = $('.move-scene');
    var recommendGroup = $('#recommendGroup');
    var typeGroup = $('.type-list .group');

    moveQuestion.mouseenter(function() {
        showMoveEvent(question, typeList, moveList);
        // typeQuestion.addClass('oncolor');
    });


    moveKiki.mouseenter(function() {
        showMoveEvent(recommendWiki, typeList, moveList);
        // typeKiki.addClass('oncolor');
    });

    moveLesson.mouseenter(function() {
        showMoveEvent(recommendLesson, typeList, moveList);
        // typeLesson.addClass('oncolor');
    });

    moveScene.mouseenter(function() {
        showMoveEvent(recommendGroup, typeList, moveList);
        // typeGroup.addClass('oncolor');
    });

    moveList.mouseleave(function() {
        moveList.hide();
    });

    typeQuestion.mouseenter(function() {
        question.show();
        recommendWiki.hide();
        recommendLesson.hide();
        recommendGroup.hide();
    });

    typeKiki.mouseenter(function() {
        question.hide();
        recommendWiki.show();
        recommendLesson.hide();
        recommendGroup.hide();
    });

    typeLesson.mouseenter(function() {
        question.hide();
        recommendWiki.hide();
        recommendLesson.show();
        recommendGroup.hide();
    });

    typeGroup.mouseenter(function() {
        question.hide();
        recommendWiki.hide();
        recommendLesson.hide();
        recommendGroup.show();
    });

    // lesson-box函数
    var index = 0;
    var weekday = $('.livebox-week li')

    function showLessson(index) {
        for (var i = 0; i <= 4; i++) {
            if (i != index) {
                $('.livebox-lesson .livebox-lesson-list').eq(i).hide();
                weekday.eq(i).removeClass('onlive');
            } else {
                $('.livebox-lesson .livebox-lesson-list').eq(index).show();
                weekday.eq(index).addClass('onlive');
            }
        }
    };
    showLessson(index);
    weekday.mouseenter(function() {
        index = weekday.index(this);
        showLessson(index);
    });


    // hot-lessonbox函数
    var lessonListIndex = 0;
    var lessonList = $('#recommendName ul li');

    showHotLessson(index);
    lessonList.mouseenter(function() {
        lessonListIndex = lessonList.index(this);
        showHotLessson(lessonListIndex);
    });

    function showHotLessson(index) {
        for (var i = 0; i <= 5; i++) {
            if (i != index) {
                $('.hot-lessonbox .lesson-list').eq(i).hide();
                lessonList.eq(i).removeClass('showlesson');
            } else {
                $('.hot-lessonbox .lesson-list').eq(index).show();
                lessonList.eq(index).addClass('showlesson');
            }
        }
    };

    //enterprise
    var enterIndex = 0;
    var strategy = $(".strategy .strategy-img-wr");
    var subStrategy = $(".strategy-img-wr li");
    var enterWidth = 166;
    var strategylen = 6;
    $('.enterprise .strategy .next').on('click', function() {
        enterIndex++;
        var len = subStrategy.length;
        if (enterIndex + strategylen > len) {
            strategy.stop().append(strategy.html());
        }
        strategy.stop().animate({
            'left': -enterIndex * enterWidth + 'px'
        }, 1000);
    });

    $('.enterprise .strategy .pre').on('click', function() {
        if (enterIndex == 0) {
            strategy.prepend(strategy.html());
            strategy.css("left", "-166px");
            enterIndex = 6
        }
        enterIndex--;
        strategy.stop().animate({
            'left': -enterIndex * 166 + 'px'
        }, 1000);
    });


    function next(index, width, ele, subele, length) {
        index++;
        var len = subele.length;
        if (index + length > len) {
            ele.stop().append(ele.html());
            alert(length);
        }
        ele.stop().animate({
            'left': -index * width + 'px'
        }, 1000);
        console.log(length);
        console.log(len);
    };

    function pre(index, width, ele, subele, length) {
        if (index == 0) {
            ele.prepend(ele.html());
            ele.css("left", -width + 'px');
            index = length;
        }
        index--;
        ele.stop().animate({
            'left': -index * width + 'px'
        }, 1000);
    };


    // university
    var uniIndex = 0;
    var schoolList = $(".school-list");
    $('.school .next').on('click', function() {
        uniIndex++;
        var len = schoolList.length;
        if (uniIndex + 7 > len) {
            schoolList.stop().append(schoolList.html());
        }
        schoolList.stop().animate({
            'left': -uniIndex * 142 + 'px'
        }, 1000);
    });

    $('.school .pre').on('click', function() {
        if (uniIndex == 0) {
            schoolList.prepend(schoolList.html());
            schoolList.css("left", "-142px");
            uniIndex = 7
        }
        uniIndex--;
        schoolList.stop().animate({
            'left': -uniIndex * 142 + 'px'
        }, 1000);
    });

    //media
    var mediaIndex = 0;
    var companyList = $(".company-list");
    $('.media-company .next').on('click', function() {
        mediaIndex++;
        var len = companyList.length;
        if (uniIndex + 7 > len) {
            companyList.stop().append(companyList.html());
        }
        companyList.stop().animate({
            'left': -mediaIndex * 166 + 'px'
        }, 1000);
    });

    $('.media-company .pre').on('click', function() {
        if (uniIndex == 0) {
            companyList.prepend(companyList.html());
            companyList.css("left", "-166px");
            uniIndex = 7
        }
        mediaIndex--;
        companyList.stop().animate({
            'left': -mediaIndex * 166 + 'px'
        }, 1000);
    });
});
