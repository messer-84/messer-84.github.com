$(function () {


	filter_range('#slider_range_1', '#range_1');
	filter_range('#slider_range_2', '#range_2');
	filter_range('#slider_range_3', '#range_3');

	bx_slider('.act_slider');
	bx_slider('.goods_f_slider');
	bx_slider_no_pager('.side_slider');
	placeholder_emul();
	show_modal(".js_trigger_1", ".modal_1");
	show_modal(".js_trigger_2", ".modal_2");

	close_modal();


});


function bx_slider(slider) {
	var $slider = $(slider);
	if ($slider.length) {
		$slider.bxSlider({
			nextText: "",
			prevText: "",
			pager: true,
			mode: 'fade',
			minSlides: 1,
			maxSlides: 1,
			infiniteLoop: true,
			auto: false
		});
	}
}
function bx_slider_no_pager(slider) {
	var $slider = $(slider);
	if ($slider.length) {
		$slider.bxSlider({
			nextText: "",
			prevText: "",
			pager: false,
			mode: 'fade',
			minSlides: 1,
			maxSlides: 1,
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

function filter_range(slider, input) {
	var $slider_range = $(slider),
		$input_range = $(input);

	if ($slider_range.length) {
		$slider_range.slider({
			range: true,
			min: 1,
			max: 20,
			step: 0.5,
			values: [ 5, 15 ],
			slide: function (event, ui) {
				$input_range.val("от "
					+ ui.values[ 0 ].toString().replace('.', ',')
					+ " до "
					+ ui.values[ 1 ].toString().replace('.', ','));
			}
		});
		$input_range.val("от "
			+ $slider_range.slider("values", 0).toString().replace('.', ',')
			+ " до "
			+ $slider_range.slider("values", 1).toString().replace('.', ','));
	}


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
$(document).on('click',function (event) {
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














