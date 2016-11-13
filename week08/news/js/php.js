$(document).ready(function(){
	 $('.content li').on('click', function() {
        $.ajax({
            type: "POST",
            url: "data.php",
            datatype:"json",
            success:function(data){
            	var str;
            	for(var p in data){
				    str = str+data[p]+',';
				    return str;
				}
                var indexList = $('<div>').addClass('index-list-wr').appendTo($('.article-view-conten section'));
                var listItem = $('<div>').addClass('index-list-item').appendTo(indexList);
                var listMain = $('<div>').addClass('index-list-main').appendTo(listItem);
                var listImg = $('<img>').addClass('index-list-image').appendTo(listMain);
                var mainText = $('<div>').addClass('index-list-main-text').appendTo(listMain);
                var mainTitle = $('<div>').addClass('index-list-main-title').appendTo(mainText);
                var mainAbs = $('<div>').addClass('index-list-main-abs').appendTo(mainText);
                var listBottom = $('<div>').addClass('index-list-bottom').appendTo(listMain);
                var mainTime = $('<img>').addClass('index-list-main-time').appendTo(listBottom);
                var listStrokeblue = $('<b>').addClass('tip-strokeblue').appendTo(mainTime);
                var tipTag = $('<div>').addClass('tip-tag-trigger').appendTo(listStrokeblue);
                var mainSite = $('<b>').addClass('index-list-main-site').appendTo(mainTime);
                var tipTime = $('<div>').addClass('tip-time').appendTo(mainTime);
                console.log(str);
                $(mainTitle).text(str.newsTitle);
            }
        });
    });
});