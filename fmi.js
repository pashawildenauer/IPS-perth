$(function() {
    var leftDrawer = $('.left-nav-drawer');
    $('#menu-logo').click(function() {
        leftDrawer.addClass('open');
    });

    $('.close-block>span').click(function(){
        leftDrawer.removeClass('open');
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 