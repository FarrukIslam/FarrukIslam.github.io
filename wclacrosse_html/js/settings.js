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

	$('.slider_items').slick({
		autoplay: true,
		arrows: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    draggable: true,
	    dots: false,
		fade: false,
	    infinite: true,
	    cssEase: 'linear',
	    responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	/**
	 * Home Page Blog Settings
	 *
	 */

	$('.latest_news_items').slick({
		autoplay: true,
		arrows: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    draggable: true,
	    dots: true,
		fade: false,
	    infinite: true,
	    responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});



	//animations setting
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


}(jQuery));	