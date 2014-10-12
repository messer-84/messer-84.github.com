$(function () {
	placeholder_emul();
//	my_countdown();
	side_box();
	show_modal(".js_control_v1", ".modal_1");
	close_modal();
	closeThanks();
	slider_v1('.slider_v1');
	slider_v1('.back_slider');
	double_slider();
	fliptimer();
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

function my_countdown() {
	var $year = 2014;
	var $month = 7;
	var $day = 29;
	var $hour = 0;
	var $min = 0;

	$month--;
	var $date = new Date($year, $month, $day, $hour, $min);
	$(".countdown").countdown({until: $date, format: "d,H,M,S"})
}

function side_box() {
	$('.btn_side').on('click', function () {
		$(this).closest('.consult_box').toggleClass('active');
	});

	// side_box hide after click submit
	$('.js_side_control').on('click', function () {
		setTimeout(function () {
			$('.consult_box').removeClass('active');
		}, 1000);
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

function hideThanksBox() {
	$('#thanks_box').fadeOut(500);
	$('.thanks_main').fadeOut(700);
}
function closeThanks() {
	$('#thanks_close, .btn_ok').on('click', function () {
		hideThanksBox();
		return false;
	});
}
function slider_v1(slider) {
	var $main_slider = $(slider);
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

function double_slider() {
	$('.main_slider_wrap .bx-prev').on('click', function () {
		$('.back_slider_wrap .bx-prev').click();
	});
	$('.main_slider_wrap .bx-next').on('click', function () {
		$('.back_slider_wrap .bx-next').click();
	})
}
function fliptimer() {
	$('#counterCID1 .digits').countdown({
		image: 'img_count/digits1_middle_black.png',
		startTime: '4:12:38:16',
		startTimeNext: '7:0:0:0',
		startTimeEnd: '6:0:0:0',
		intervalsCnt: 810,
		digitWidth: 36,
		digitHeight: 52,
		stepTime: 60,
		timerEnd: function () {
			$('.timer_hold .cap').addClass('red').html('Акция завершена!');
		}

	});

}











