$(function () {
	placeholder_emul();
	move_top();
	tabs();
	goods_previews();
	tabs_type_2();
	close_modal();
	show_modal('.js_callback', '.modal_1');
	show_modal('.js_order', '.modal_2');

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

function move_top() {
	$('.move_top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

function tabs() {

	$(".main_t_item").on('click', function () {
		var tab = $(this),
			tab_index = tab.attr("data-tab");

		$('.main_t_item, .main_c_item').removeClass('selected');

		tab.addClass('selected');

		$('.main_c_item').each(function () {
			if ($(this).attr("data-content") == tab_index) {
				$(this).addClass('selected');
			}
		});

	});
}

function goods_previews() {
	$('.goods_p_link').on('click', function () {
		var $preview = $(this),
			$source = $preview.attr('data-source');
		$('.goods_p_link').removeClass('active');
		$preview.addClass('active');
		$('.goods_img_hold img').attr('src', $source);
		return false;
	});
}

function tabs_type_2() {
	$('dt.tabs_lbl').on('click', function () {
		$(this).siblings().removeClass('selected').end().next('dd.tabs_hold').andSelf().addClass('selected');
	});
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


