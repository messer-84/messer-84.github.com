$(function () {
	showSearchBox();
	if ($('.main_slider').length) {
		initSlider('.main_slider');
	}
	if ($('.events_slider').length) {
		initSlider_v2('.events_slider');
	}
	close_modal();
	show_modal('.js_call','.modal_1')
	emulPlaceholder();

});


function initSlider(slider_class) {
	var $main_slider = $(slider_class);
	if ($main_slider.length) {
		$main_slider.bxSlider({
			pager: true,
			mode: 'fade',
			controls: true,
			prevText: "",
			nextText: ""
		});
	}

}

function initSlider_v2(slider_class) {
	var $main_slider = $(slider_class);
	if ($main_slider.length) {
		$main_slider.bxSlider({
			pager: false,
			mode: 'fade',
			controls: true,
			prevText: "",
			nextText: ""
		});
	}

}

function showSearchBox() {
	$('.search_control').on('click', function (e) {
		$('.search_box').fadeIn();
		e.preventDefault();
	});
	$('.btn_close').on('click', function(e){
		$('.search_box').fadeOut();
		e.preventDefault();
	})
}

function show_modal(m_trigger, m_modal) {
	m_trigger = $(m_trigger);
	m_modal = $(m_modal);
	var $modal_wrap = m_modal.closest('.modal_wrap');

	m_trigger.on('click', function () {
		$modal_wrap.fadeIn(500);
		m_modal.addClass('active');
		return false;
	});

}

$(document).on('click', function (event) {
	if ($(event.target).closest(".modal_box").length) {

	}
	else {
		$('.modal_box').removeClass('active');
		$('.modal_wrap').fadeOut(700);
		event.stopPropagation();
	}

});

function close_modal() {
	$('.modal_close').on('click', function () {
		$(this).closest(".modal_box").removeClass('active');
		$(".modal_wrap").fadeOut(700);
		return false;
	});
}

function emulPlaceholder() {
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
