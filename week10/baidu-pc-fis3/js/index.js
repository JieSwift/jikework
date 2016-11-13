$(function() {
    // 绑定元素
    // body
    var body = $('body');
    // 换肤按钮
    var skinBtn = $('.a-skin');
    // 皮肤盒子
    var selectSkin = $('.select-skin-wr');
    //皮肤
    var skinImg = $('.img-tab td img');
    // 皮肤地址
    var imgSrc = localStorage.getItem("skinSrc");
    // 收起
    var pickup = $('.pickup');
    // 是否显示换肤
    var isSkinShow = false;
    //预览皮肤
    var showViewSkin = $('.img-view-wr img');
    // 不使用皮肤
    var notUseSkin = $('.notuse');
    // 背景透明度
    var bgOpacity = $('#bg-opacity .move-pro');
    // 登录
    var login = $('#login');
    // 设置
    var set = $('#set');
    // 更多产品
    var more = $('.more-wr');
    // 侧边导航栏
    var asideNav = $('.aside-nav');
    // 我的导航
    var myNavTitle = $('.mynav-wr');
    // 我的导航 btn
    var myNavTitleBtn = $('.title-content a');
    //关注
    var myfollow = $('.rec-nav-wr .re-myfollow');
    // 推荐
    var reconmend = $('.rec-nav-wr #reconmend');
    // 导航
    var vedio = $('.rec-nav-wr #vedio');
    // 购物
    var shop = $('.rec-nav-wr #shop');
    // 网站导航
    var siteNav = $('.rec-nav-wr #site-nav');


    // 绑定事件
    $(function() {
        if (imgSrc) {
        	body.css('background-image', "url("+imgSrc+")");
        }
    });
    // 显示换肤
    skinBtn.on('click', function() {
        selectSkin.toggleClass('hidden');
        isSkinShow = true;
    });
    //收起换肤
    pickup.on('click', function() {
        selectSkin.toggleClass('hidden');
        isSkinShow = false;
    });

    // 皮肤预览
    skinImg.on('mouseover', function() {
        imgSrc = this.getAttribute('src');
        showViewSkin.attr('src', imgSrc);
    });
    // 换肤
    skinImg.on('click', function() {
        imgSrc = this.getAttribute('src');
        body.css('background-image', "url(" + imgSrc + ")");
        // 存储imgSrc到localStorage
        localStorage.setItem("skinSrc", imgSrc);
    });
    // 点击隐藏换肤
    $('.article-wr').on('click', function() {
        while (isSkinShow) {
            selectSkin.toggleClass('hidden');
            isSkinShow = false;
        }
    });


    // // 不使用皮肤
    // notUseSkin.on('click',function(){
    // 	body.css('background', "#fff");
    // });

    // 透明度进度条 未完成
    // bgOpacity.mousedown(function(e) {
    //      var proValue = $('.bg-opacity progress');
    //     bgOpacity.bind('mousemove',function(e){
    //     	alert(e.pageX);
    //     });
    // });
    // bgOpacity.mouseup(function() {
    //     bgOpacity.unbind('mousemove');
    // });

    // hover显示登录nav
    login.on('mouseover', function() {
        $('.login-con').show();
    });
    // 离开隐藏
    $('.login-wr').on('mouseleave', function() {
        $('.login-con').hide();
    });

    // // hover显示set nav
    set.on('mouseover', function() {
        $('.set-con').show();
    });
    // 离开隐藏
    $('.set-wr').on('mouseleave', function() {
        $('.set-con').hide();
    });

    //hover 显示侧边导航栏
    more.on('mouseover', function() {
        $('.aside-nav').show();
    });
    // 离开隐藏
    $('.more-wr').on('mouseleave', function() {
        $('.aside-nav').hide();
    });
    // hover显示myNavTitle
    myNavTitle.on('mouseover', function() {
        $('.tc-aside').show();
    });
    // 离开隐藏
    myNavTitle.on('mouseleave', function() {
        $('.tc-aside').hide();
    });
    // myNavTitleBtn点击事件
    myNavTitleBtn.on('click', function() {
        $('.icon-triangleright').toggleClass('hidden');
        $('.icon-triangledown').toggleClass('hidden');
    });

    // 导航栏切换函数
    var selectNav = function(name) {
        $('.myfollow').hide();
        $('.re-news-content-wr').hide();
        $('.re-nav-wr').hide();
        $('.re-video-wr').hide();
        $('.re-shop-wr').hide();
        myfollow.css('background', '#fff');
        reconmend.css('background', '#fff');
        siteNav.css('background', '#fff');
        vedio.css('background', '#fff');
        shop.css('background', '#fff');
        switch (name) {
            case 'myfollow':
                $('.myfollow').show();
                myfollow.css('background', 'rgba(154, 157, 162, 0.4)');
                break;
            case 'reconmend':
                $('.re-news-content-wr').show();
                reconmend.css('background', 'rgba(154, 157, 162, 0.4)');
                break;
            case 'siteNav':
                $('.re-nav-wr').show();
                siteNav.css('background', 'rgba(154, 157, 162, 0.4)');
                break;
            case 'vedio':
                $('.re-video-wr').show();
                vedio.css('background', 'rgba(154, 157, 162, 0.4)');
                break;
            case 'shop':
                $('.re-shop-wr').show();
                shop.css('background', 'rgba(154, 157, 162, 0.4)');
                break;

        }
    };
    // 导航栏切换事件绑定
    // 关注
    myfollow.on('click', function() {
        selectNav('myfollow');
    });
    // 推荐
    reconmend.on('click', function() {
        selectNav('reconmend');
    });
    // 网站导航
    siteNav.on('click', function() {
        selectNav('siteNav');
    });
    // 视频
    vedio.on('click', function() {
        selectNav('vedio');
    });
    // 购物
    shop.on('click', function() {
        selectNav('shop');
    });
});
