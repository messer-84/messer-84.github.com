$(function () {

	bx_slider('.main_slider');
	placeholder_emul();
	menu_open('.control_nav');
	menu_open('.control_catalog');
	my_fancybox();

});


function bx_slider(slider) {
	var $slider = $(slider);
	if ($slider.length) {
		$slider.bxSlider({
			nextText: "",
			prevText: "",
			nextSelector: $('.main_s_next'),
			prevSelector: $('.main_s_prev'),
			pager: true,
//			mode: 'fade',
			minSlides: 1,
			pagerCustom: '#bx-pager',
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

function menu_open(control){
	var $control = $(control);
	$control.on('click', function(){
		$(this).toggleClass('active');
		return false;
	})
}

$(function () {

	initTabs();

	var pageSlider = $('.goods_slider_wrap'), overlay = $('.overlay'), doc = $(document), stopLoop = false;


	pageSlider.each(function (i) {
		$(this).find('.goods_slider').bxSlider({
			slideSelector: $(this).find('.goods_s_item'),
			mode: 'fade',
			nextSelector: $(this).find('.goods_s_next'),
			prevSelector: $(this).find('.goods_s_prev'),
			prevText: '',
			nextText: '',
			pager: true,
			pagerCustom: $(this).find('.slider_dots')
		});
	});

	setTimeout(function () {

		$('.popup_close').on('click', function () {
			overlay.fadeOut(500);
			return false;
		});

		$('.goods_s_next').on('click', function () {
			var firedEl = $(this);
			stopLoop = !stopLoop;
			if (stopLoop) {
				$('.goods_s_next').not(firedEl).find('.bx-next').click();
			}
			return false;
		});

		$('.goods_s_prev').on('click', function () {
			var firedEl = $(this);
			stopLoop = !stopLoop;
			if (stopLoop) {
				$('.goods_s_prev').not(firedEl).find('.bx-prev').click();
			}
			return false;
		});

		$('.slider_thumb').on('click', function () {
			var firedEl = $(this);
			stopLoop = !stopLoop;
			if (stopLoop) {
				$('.slider_thumb').parent().not(firedEl.parent()).find('.slider_thumb').eq(firedEl.index()).click();
			}
		});

		overlay.css({'top': 0, 'bottom': 0, 'display': 'none'});

		$('#scroller .goods_s_item').on('click', function () {
			overlay.css({'height': doc.height()}).fadeIn(1000);
			return false;
		});
	}, 1000);


});

function initTabs() {
	var tabs = $('.tabs_lbl'), subMenus = $('.goods_m_submenu');


	subMenus.parent().on('click', function () {
		var firedEl = $(this);

		if (firedEl.hasClass('active')) {
			firedEl.removeClass('active');
		} else {
			firedEl.addClass('active');
		}

		return false;
	});

	tabs.on('click', function () {
		var firedEl = $(this), clkhndl = 0;


		if (!firedEl.hasClass('selected')) {
			tabs.removeClass('selected');
			firedEl.addClass('selected');
			$('.tabs_hold').removeClass('selected').eq(firedEl.index()).addClass('selected');
		}

		$('.tabs_hold').find('.goods_menu_list').addClass('slideDone').slideDown(800);

		$(document).click(function (e) {
			if ($(e.target).parents().filter('.goods_menu').length != 1) {
				if ($(window).width() < 960) {
					$('.slideDone').slideUp(800);
				}
			}
		});


		return false;
	});


}

function my_fancybox() {
	var $link_fancy = $("a.fancybox");

	if ($link_fancy.length) {
		$link_fancy.fancybox({
			padding: 10,
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}

}













