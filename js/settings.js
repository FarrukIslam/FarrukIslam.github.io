(function ($) {
	"use strict";

	$(window).scroll(function() {

		if ($(window).scrollTop() > 50) {
			$(".main_menu").addClass("tiny");
		} 
		else {
			$(".main_menu").removeClass("tiny");
		}
	});

	/**
	 * Home Page Slider Slick Settings
	 *
	 */
	$('#homeslider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.slider_item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('#homeslider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.slider_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
    $('#homeslider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		draggable: true,
		fade: false,
		infinite: true,
		slidesToShow: 1,
	});
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }

	/**
	 * Fontpage Portfolio Slick Settings
	 *
	 */
	$('.portfolio_items').slick({
		autoplay: true,
		arrows: true,
		dots: false,
		draggable: true,
		fade: false,
		infinite: true,
		slidesToShow: 1,
		responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	/**
	 * Fontpage Priceing Slider Slick Settings
	 *
	 */
	$('.price_items').slick({
		autoplay: true,
		arrows: true,
		dots: false,
		draggable: true,
		fade: false,
		infinite: true,
		slidesToShow: 2,
		responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	/**
	 * Fontpage Team Member Slick Settings
	 *
	 */
	$('.team_member_items').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		draggable: true,
		fade: false,
		infinite: true,
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	/**
	 * Smooth scroll
	 *
	 */
	$(function() {
	  $('.smoothScroll, .smoothScroll>a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	/**
	 * Shop page widget Categories after arrow
	 *
	 */
	var arrow = $( '<span class="arrow_right ion-android-arrow-dropright"></span>' );
	$( ".product-categories li.cat-parent > a" ).after(arrow);

	$( ".product-categories li.cat-parent .arrow_right" ).click(function() {
	  $(this).toggleClass( 'ion-android-arrow-dropdown ion-android-arrow-dropright').next().toggle();
	});

	/**
	 * Header Mini cart hover ajaxfy
	 *
	 */
	$('.cart_toggler').hover(function(){
		var data = {
	   	'action': 'mode_theme_update_mini_cart'
		 };
		 $.post(
		   woocommerce_params.ajax_url, // The AJAX URL
		   data, // Send our PHP function
		   function(response){
		     $('.header_shopping_cart_content').html(response); // Repopulate the specific element with the new content
		   }
		 );
		
	});

	//owl carousel band icon
	  var owl = $('.owl-carousel');
	  owl.owlCarousel({
	    items: 7,
	    loop: true,
	    margin: 10,
	    autoplay: true,
	    autoplayTimeout: 1000,
	    autoplayHoverPause: true,
	    responsiveClass:true,
    	responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }
	  });











}(jQuery));	



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












var  mn = $(".navbar.navbar-default");
var  mns = "navbar-fixed-top";
var  hdr = $('#header').height(); 

$(window).scroll(function() {
  if( $(this).scrollTop() > (hdr+200) ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});




$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});


$(function () {
    $('.textBox').focus(function () {
         if ($(this).val().trim() == "")
         {
            $(this).prev().css({
                top: '-10px',
                fontSize: '0.7em'
            });
         }
         $(this).prev().css({
            color: '#06C7CE'
         });
    })

    $('.textBox').blur(function () {
         if ($(this).val().trim() == "")
         {
            $(this).prev().css({
                top: '12px',
                fontSize: '0.8em'
            });
         }
         $(this).prev().css({
            color: '#AAA'
        });
    }) 
})



$(document).ready(function() {
    // only show CodePen link if on debug view (with no header)
    if (location.pathname.indexOf('debug') > -1) {
        $('#view-on-codepen').css('display','inline-table')
    }
});