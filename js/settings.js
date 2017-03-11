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
	 * Testimonial Slider Slick Settings
	 *
	 */
	$('.new_products_slider').slick({
		autoplay: false,
		arrows: true,
		dots: false,
		draggable: true,
		fade: false,
		infinite: true,
		slidesToShow: 4,
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
	    items: 6,
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