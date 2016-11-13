$(function() {
    var contentNav = $('.content li');
    var index = 0;
    showOn(index);
    $('.content li').on('click', function() {
        index = $('.content li').index(this);
        for (var i = 0; i < contentNav.length; i++) {
            if (index != i) {
                hideOn(i);
            }
        }
        showOn(index);
    });

    function showOn(index) {
        $(contentNav[index]).find('span').addClass('on');
    };

    function hideOn(index) {
        $(contentNav[index]).find('span').removeClass('on');
    };

   
});
