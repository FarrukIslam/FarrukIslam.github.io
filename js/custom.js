(function($) {
	$(function() { //on DOM ready
		$("#scroller").simplyScroll({
			customClass: 'vert',
			orientation: 'vertical',
            auto: false,
            manualMode: 'loop',
			frameRate: 20,
			speed: 25
		});
	});
})(jQuery);

