$(function () {
	placeholder_emul();
	slider_v1('.slider_v1');
	my_fancybox();
	tabs();
	select_styling();
});


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

function slider_v1(slider_class) {
	var $slider = $(slider_class);
	if ($slider.length) {
		$slider.bxSlider({
			pager: true,
			mode: 'fade',
			controls: false
		});
	}
}
function slider_v2(slider_class) {
	var $slider = $(slider_class);
	if ($slider.length) {
		$slider.bxSlider({
			pager: true,
			mode: 'fade',
			controls: true
		});
	}
}

function slider_v3(slider_class) {
	var $slider = $(slider_class);
	if ($slider.length) {
		$slider.bxSlider({
			pager: false,
			mode: 'fade',
			controls: true,
			prevText: "",
			nextText: ""
		});
	}
}


function my_fancybox() {
	var $link_fancy = $("a.fancybox"),
		$link_fancy_v2 = $("a.fancybox_v2");

	if ($link_fancy.length || $link_fancy_v2.length) {
		if ($link_fancy_v2.length) {
			$link_fancy_v2.attr('rel', 'gallery');
			$link_fancy_v2 = $link_fancy;
		}
		$link_fancy.fancybox({
			padding: 0,
			helpers: {
				overlay: {
					locked: false
				}
			}
		});

	}

}


function tabs() {
	$('.tabs_c_item').fadeOut();
//	$('.tabs_c_item').hide();

	$(".tabs_item_v2").on('click', function () {
		var tab = $(this),
			tab_index = tab.attr("data-tab");

		$('.tabs_item_v2, .tabs_c_item').removeClass('selected');

		tab.addClass('selected');

		$('.tabs_c_item').each(function () {
			if ($(this).attr("data-content") == tab_index) {
				$(this).addClass('selected');
			}
		});

	});
}

function select_styling() {
	var $select = $('.form_select');
	if ($select.length) {
		$select.styler();
	}

}












