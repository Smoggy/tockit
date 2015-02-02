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
	});

	$('.head').waypoint(function(direction){
		if(direction == 'down') {
			var $element = $(this.element),
				$text = $element.find('h1'),
				$first_line =$element.find('.line.first'),
				$second_line = $element.find('.line.second');

			setTimeout(function(){ $text.css({opacity: 1}); }, 600);
			$first_line.css({width: 151});
			$second_line.css({width: 151});

			this.destroy();
		}
	},{
		offset: '700px'
	});

	$('.view_more').waypoint(function(direction){
		if(direction == 'down') {
			var $element = $(this.element),
				$top = $element.find('.top'),
				$left = $element.find('.left'),
				$right = $element.find('.right'),
				$bottom_left = $element.find('.bottom_left'),
				$bottom_right = $element.find('.bottom_right'),
				$btn = $element.find('.btn')
				$first_line = $element.find('.first_line'),
				$second_line = $element.find('.second_line');

			$top.css({left: 0, width: 554});
			setTimeout(function(){ $left.css({height: 69}); }, 700);
			setTimeout(function(){ $right.css({height: 69}); }, 700);
			setTimeout(function(){ $bottom_left.css({width: 131}); }, 1400);
			setTimeout(function(){ $bottom_right.css({width: 131}); }, 1400);
			setTimeout(function(){ $btn.css({opacity: 1}); }, 2100);
			setTimeout(function(){ $first_line.css({opacity: 1}); }, 2500);
			setTimeout(function(){ $second_line.css({opacity: 1}); }, 2900);

			this.destroy();
		}
	}, {
		offset: '700px'
	});
});