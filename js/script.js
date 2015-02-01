$(document).ready(function(){
	$(document).on('scroll', function(){
		var $header = $('header');
		if($(window).scrollTop() > 280) {
			$header.addClass('white');
		} else {
			$header.removeClass('white');
		}
	});

	$('.portfolio_slider').bxSlider({
		infiniteLoop: false,
		controls: false,
		pagerCustom: '.slider_pager'
	});

	$('.quote_slider').bxSlider({
		infiniteLoop: false,
		controls: false,
		pagerCustom: '.quote_pager',
		mode: 'fade',
		speed: 1000
	})
});