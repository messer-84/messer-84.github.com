$(function () {

	slider_v1();
	slider_v2();
	slider_reviews();
	chosen_f();
	placeholder_emul();
	my_fancybox();
	fixed_box_init();
	move_top();
	fix_navigation();

});


function slider_v1() {
	var $main_slider = $('.main_slider');
	if ($main_slider.length) {
		$main_slider.bxSlider({
			pager: true,
			mode: 'fade',
			controls: false
		});
	}

}


function chosen_f() {
	var $select = $("select.form_select_v1");
	if ($select.length) {
		$select.chosen(
			{disable_search_threshold: 10}
		);
	}

}

function slider_v2() {
	var $slider = $('.ship_slider');
	if ($slider.length) {
		$slider.bxSlider({
			nextText: "",
			prevText: "",
			pager: true,
			mode: 'fade',
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			infiniteLoop: true,
			auto: false
		});
	}
}

function slider_reviews() {
	var $slider = $('.slider_reviews');
	if ($slider.length) {
		$slider.bxSlider({
			nextText: "",
			prevText: "",
			mode: 'fade',
			adaptiveHeight: true,
			pager: false,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			responsive: true,
			infiniteLoop: true,
			auto: false
		});
	}
}
function placeholder_emul() {
	if (!Modernizr.input.placeholder) {

		$('[placeholder]').focus(
			function () {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}
			}).blur(
			function () {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
		$('[placeholder]').parents('form').submit(function () {
			$(this).find('[placeholder]').each(function () {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});

	}
}

function my_fancybox() {
	var $link_fancy = $("a.fancybox"),
		$link_fancy_v2 = $("a.fancybox_v2");

	if ($link_fancy.length || $link_fancy_v2.length) {
		$link_fancy.attr('rel', 'gallery');
		$link_fancy.fancybox({
			padding: 0,
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
		$link_fancy_v2.fancybox({
			padding: 0,
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}


}
function fixed_box_init() {
	var $fixed_box = $('.fixed_box');

	if ($fixed_box.length) {
		var $fixed_box_pos = $fixed_box.offset();
		$fixed_box_top = $fixed_box_pos.top;

		$(window).scroll(function () {
			var $this = $(this);
			console.log($fixed_box_top);
			if ($this.scrollTop() > $fixed_box_top) {
				$fixed_box.addClass('active');
			}
			else {
				$fixed_box.removeClass('active');

			}
		});
	}


}

function move_top() {
	$('.arrow_v1').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	})
}


$(window).resize(function () {
	$('.fixed_box').width($('.primary_row').width() - 40);
});

function fix_navigation() {
	var $fixed_box = $('#fixed_nav');
	if ($fixed_box.length) {
		$fixed_box.smint({
			'scrollSpeed': 1000
		});
	}

}






