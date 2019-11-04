$(function() {
    var leftDrawer = $('.left-nav-drawer');
    $('#menu-logo').click(function() {
        leftDrawer.addClass('open');
    });

    $('.close-block>span').click(function(){
        leftDrawer.removeClass('open');
    });
});