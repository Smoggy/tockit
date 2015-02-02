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

	$('.studies_section .container').waypoint(function(direction){
		if(direction == 'down') {
			var $element = $(this.element),
				$topline  = $element.find('.top_line'),
				$vertical = $element.find('.vertical'),
				$horizontal_1 = $element.find('.horizontal_1'),
				$horizontal_2 = $element.find('.horizontal_2'),
				$image = $element.find('.image'),
				$headers = $element.find('h1'),
				$texts = $element.find('p'),
				$btns = $element.find('.btn');


			$topline.css({left: 0, width: 879});
			setTimeout(function() {$vertical.css({height: 31}); }, 700);
			setTimeout(function() {$horizontal_1.css({left: 0, width: 45}); }, 1400);
			setTimeout(function() {$horizontal_2.css({left: 0, width: 73}); }, 1800);
			setTimeout(function() {$image.css({bottom: 0, opacity: 1}); }, 2500);
			setTimeout(function() {
				var counter_1 = 0, counter_2 = 0;
				$headers.each(function(index, value){
					setTimeout(function(){$(value).css({opacity: 1})}, counter_1);
					counter_1 += 200;
				});

				$($texts.get().reverse()).each(function(index, value) {
					setTimeout(function(){$(value).css({opacity: 1})}, counter_2);
					counter_2 += 200;
				});
			}, 3300);

			setTimeout(function(){
				var counter = 0;
				$btns.each(function(index, value){
					setTimeout(function(){$(value).css({top: 0, opacity: 1})}, counter);
					counter += 300;
				});
			}, 4200);
			this.destroy;
		}
	}, {
		offset: '50%'
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