var $slider = [];

$(function () {
	nav_open();
	vert_tabs();
	moveToTop();
	side_box();
	placeholder_emul();
	select_styling('.form_select', 'myClass-1');
	goods_previews();
	sliders_init_3();
	sliders_init_1();
	show_modal(".js_control_v1", ".modal_1");
	show_modal(".js_control_v2", ".modal_2");
	show_modal(".js_control_v3", ".modal_3");
	show_modal(".js_control_v4", ".modal_4");

	close_modal();

	tabs('.tabs_item', '.tabs_c_item');
	filters('.filter_title', '.filter_content');
	form_reset_emul();
	form_submit_emul();

});

$(window).resize(function () {
	sliders_init_3();
	sliders_init_1();
});


function filters(control, content) {
	control = $(control);
	content = $(content);
	control.on('click', function () {

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next(content).removeClass('active');
		}
		else {
			$(content).removeClass('active');
			$(control).removeClass('active');
			$(this).addClass('active');
			$(this).next(content).addClass('active');

		}

	});
}

function vert_tabs() {
	$(".newslider-vertical").sliderkit({
		shownavitems: 8,
		verticalnav: true,
		navitemshover: false,
		circular: true
	});
}


function moveToTop() {
	var control = $('.global_to_top');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			control.addClass('show');

		}
		else {
			control.removeClass('show');
		}
	});

	control.on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800, function () {
			$(this).removeClass('show');
		});
	})


}


function nav_open() {
	$('.js_control_1').on('click', function () {
		$('.aux_nav').toggleClass('open');
		$('header').toggleClass('nav_open');
	});
}

function select_styling(select_class, myClass) {
	var $select = $(select_class);
	if ($select.length) {
		$select.selectOrDie({
			customClass: myClass
		});
	}
}

function tabs(tab, tab_content) {
	var $tab = $(tab), $tab_content = $(tab_content);

	$tab.on('click', function () {
		var this_tab = $(this),
			tab_index = this_tab.attr("data-tab");

		$tab.removeClass('selected');
		$tab_content.removeClass('selected');

		this_tab.addClass('selected');

		$tab_content.each(function () {
			if ($(this).attr("data-content") == tab_index) {
				$(this).addClass('selected');
			}
		});

	});
}

function goods_previews() {
	$('.goods_thumbs_item').on('click', function () {
		var $preview = $(this),
			$source = $preview.attr('data-source');
		$('.goods_thumbs_item').removeClass('active');
		$preview.addClass('active');
		$('.goods_img_hold img').attr('src', $source);
		return false;
	});
}


function carousel(list) {
	return list.bxSlider({
		nextText: '',
		prevText: '',
		pager: false,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 190,
		responsive: false,
		infiniteLoop: true
	});

}

function sliders_init_1() {
	if ($('body.mod_goods').length) {
		if ($(window).width() < 640) {
			console.log($slider.length + '123');

			if (!$slider.length) {

				$slider.push(carousel($('.slider_1')));

			}
		}
		else {
			for (var i = 0; i < $slider.length; i++) {
				$slider[i].destroySlider();
				$('.goods_wrapper *').removeAttr('style');

			}
			$slider = [];
		}
	}

}

function sliders_init_3() {
	if ($('body.mod_home').length) {
		if ($(window).width() < 640) {

			if (!$slider.length) {
				$slider.push(carousel($('.slider_1')));
				$slider.push(carousel($('.slider_2')));
				$slider.push(carousel($('.slider_3')));
			}
		}
		else {
			for (var i = 0; i < $slider.length; i++) {
				$slider[i].destroySlider();
				$('.goods_wrapper *').removeAttr('style');

			}
			$slider = [];
		}
	}


}

function show_modal(m_trigger, m_modal) {
	m_trigger = $(m_trigger);
	m_modal = $(m_modal);
	var $modal_wrap = m_modal.closest('.modal_wrap');

	m_trigger.on('click', function () {
		$('.modal_wrap').fadeOut();
		$modal_wrap.fadeIn();
		m_modal.addClass('active');
		return false;
	});

}

$(document).on('click', function (event) {
	var cond_1 = $(event.target).closest(".modal_box").length;
	if (cond_1) {

	}
	else {
		$(event.target).closest('.modal_box').removeClass('active');
		$(event.target).closest('.modal_wrap').fadeOut(700);

		event.stopPropagation();
	}


});

function close_modal() {
	$('.modal_close').on('click', function () {
		$(this).closest(".modal_box").removeClass('active');
		$(this).closest(".modal_wrap").fadeOut(700);
		return false;
	});
}

function side_box() {
	$('.btn_side').on('click', function () {
		if ($(this).closest('.side_panel').hasClass('active')) {
			$(this).closest('.side_panel').removeClass('active');
			$('.side_panel_background').fadeOut(700);
		}
		else {
			$(this).closest('.side_panel').addClass('active');
			$('.side_panel_background').fadeIn(700);

		}

	});
	$('.side_panel_background').on('click', function () {
		$('.side_panel').removeClass('active');
		$(this).fadeOut(700);
	})
}

function form_reset_emul() {
	$('.form_reset_v1').on('click', function () {
		$(this).closest('form')[0].reset();
	})
}
function form_submit_emul() {
	$('.form_submit_v1').on('click', function () {
		$(this).closest('form')[0].submit();
	})
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
