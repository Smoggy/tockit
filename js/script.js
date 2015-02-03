$(document).ready(function(){
	$(document).on('scroll', function(){
		var $header = $('header'),
			$side_nav = $('.side_nav');
		if($(window).scrollTop() > 290) {
			$header.addClass('white');
			$side_nav.css({opacity: 1});
		} else {
			$header.removeClass('white');
			$side_nav.css({opacity: 0});
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

	$('.btn-round').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
        	scrollTop: $(".why_us_section").offset().top - $('header').height()
    	}, 600);
	});

	$('header ul li a').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - $('header').height()
		}, 900);
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

	$('.lists_container').waypoint(function(direction){
		if(direction == 'down') {
			var $element = $(this.element),
				$topline = $element.find('.top_line'),
				$bottomline = $element.find('.bottom_line'),
				$separator_1 = $element.find('.separator_1'),
				$separator_2 = $element.find('.separator_2'),
				$separator_3 = $element.find('.separator_3'),
				$list_1  = $element.find('.list_1 li'),
				$list_2 = $element.find('.list_2 li'),
				$list_3 = $element.find('.list_3 li'),
				$bottom_vertical = $element.find('.bottom_vertical'),
				$btn = $element.find('.btn');

			$topline.css({width: 455, left: 0});
			$bottomline.css({width: 449});
			setTimeout(function() {$separator_1.css({height: 124}); }, 700);
			setTimeout(function() {$separator_3.css({height: 124, top: 0}); }, 700);
			setTimeout(function() {
				var counter_1 = 0, counter_2 = 0;
				$list_1.each(function(index, value){
					setTimeout(function (){ 
						$(value).find('i.line').animate({width: 33}, 400, function() { $(value).find('i.text').css({opacity: 1}); });
					}, counter_1);
					counter_1 += 200;
				});

				$($list_3.get().reverse()).each(function(index, value){
					setTimeout(function (){ 
						$(value).find('i.line').animate({width: 33}, 400, function() { $(value).find('i.text').css({opacity: 1}); });
					}, counter_2);
					counter_2 += 200;
				});
			}, 1400);
			setTimeout(function() { $separator_2.css({top: 0, height: 124}); }, 2000);
			setTimeout(function(){
				var counter = 0;
				$list_2.each(function(index, value){
					setTimeout(function(){
						$(value).animate({left: 0, opacity: 1}, 400);
					}, counter);
					counter += 200;
				});
			}, 2700);
			setTimeout( function(){ $bottom_vertical.css({height: 221}); }, 3500);
			setTimeout( function() { $btn.css({opacity: 1}); }, 4200);


			this.destroy();
		}
	}, {
		offset: '50%'
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


			$topline.css({left: 0, width: 868});
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

	var contentSections = $('.section'),
		navigationItems = $('.side_nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	$('.side_nav a').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - $('header').height()
		}, 900);
	});


	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('.side_nav a[href="#'+$this.attr('id')+'"]');
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.removeClass('active');
				activeSection.addClass('active');
			}else {
				navigationItems.eq(activeSection).removeClass('active');
			}
		});
	}

});