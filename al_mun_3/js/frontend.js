$(function () {
	list_open();
	placeholder_emul();
	carousel('.main_slider');
	open_navigation();
	accordion_menu('.menu_link', '.submenu');
	modal_docs();
	my_datepicker();
	photos_slider();
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

function carousel(list) {
	var $slider = $(list);
	if ($slider.length) {
		$slider.bxSlider({
			nextText: '',
			prevText: '',
			pager: false,
			minSlides: 7,
			maxSlides: 7,
			moveSlides: 7,
			slideWidth: 155,
			responsive: false,
			infiniteLoop: true
		});
	}
}

function open_navigation() {
	$('.nav_control').on('click', function () {
		$('.nav_hold').toggleClass('open');
	});
}

function accordion_menu(m_trigger, m_menu) {
	var $m_speed = 500;
	$m_trigger = $(m_trigger);
	$m_menu = $(m_menu);

	$m_trigger.on('click', function () {
		$(this).parent().toggleClass('open');
		var $our_menu = $(this).siblings($m_menu);
		if ($our_menu.length) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$our_menu.slideUp($m_speed);
				return false;
			}
			else {
				$(this).addClass('active');
				$our_menu.slideDown();
				return false;
			}
		}
		else {
			return true;
		}

	});
}

function list_open() {
	$('.list_control').on('click', function () {
		$(this).toggleClass('open');
		$(this).siblings('.list_v1').toggleClass('open');
		return false;
	})
}

function modal_docs() {
	$('.modal_link').on('click', function () {
		var $parent = $(this).closest('.item_v2');
		$('.modal_docs').hide();
		$parent.find('.modal_docs').show();
		$parent.find('.close').on('click', function () {
			$parent.find('.modal_docs').hide();
		});
		return false;

	});

}

function my_datepicker() {
	var $datepicker = $(".datepicker");
	if ($datepicker.length) {
		$datepicker.datepicker({
			firstDay: 1,
			showOtherMonths: true,
			selectOtherMonths: true,
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
				'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
				'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			gotoCurrent: true,

			showdivPanel: true
		});
	}


}

function photos_slider() {
	var $barousel = $('.barousel');
	if($barousel.length){
		$('#barousel_thslide').barousel({
			navWrapper: '#thslide_barousel_nav .thslide_list',
			manualCarousel: 1,
			navType: 3
		});

		$('#thslide_barousel_nav').thslide({
			itemOffset: 118
		});
		$(".group1").colorbox({rel: 'group1'});
	}

}





