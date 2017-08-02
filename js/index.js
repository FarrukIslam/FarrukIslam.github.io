$(document).ready(function() { 

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS) {
  
  $('body').addClass('iOSfix');
  $('nav').removeClass('stickynav');   $('#navbarNavAltMarkup').removeClass('spy-class');
  $('nav').css('opacity',1);
  $('nav').css('background-color','rgba(0,0,0,0.3)')
  
} else {
  $( '.stickynav' ).css('opacity',1);

$(window).on('mousewheel DOMMouseScroll', function (e) {

    var direction = (function () {

        var delta = (e.type === 'DOMMouseScroll' ?
                     e.originalEvent.detail * -40 :
                     e.originalEvent.wheelDelta);

        return delta > 0 ? 0 : 1;
    }());

    if(direction === 1) {
      $('.stickynav').css('opacity',0);
      
    }
    if(direction === 0) {
       $('.stickynav').css('opacity',1);
      
    }
});
}
});