$(function () {
	getDeviceName();
	emulPlaceholder();
	showRegisterFields('.form_lbl_check','.enter_hidden_block');
	nav_open();

	move_top();

	if ($('.acc_title').length) {
		collapsingBlocks();
	}
	if($('.acc_title_v3').length){
		collapsingBlocksNotAccordeon()
	}

	if ($('.object_slider_list').length) {
		initOwlSlider();
	}

	if ($('.js_info').length) {
		initModalBox('.modal_1', '.js_info');
	}

	if ($('.js_order').length) {
		initModalBox('.modal_1', '.js_order');
	}

	if ($('.obj_control').length) {
		slidingInCart();
	}
	if ($('.js_btn_delete').length) {
		deleteObject();
	}
	if ($('.js_btn_change').length) {
		showDeleteButton();
	}
	if ($('.count_minus').length) {
		countingInput();
	}
	if ($('.field_telephone').length) {
		initPhoneMask();
	}
	if ($('.form_select_v1').length) {
		selectStyling('.form_select_v1', 'mes_select');
	}
	if ($('#mypass').length) {
		initPasswordMask();
	}
});

//------------открытие боковой панели
function nav_open() {
	$('.js_nav_ctrl').on('click', function () {
		$('body').toggleClass('menu_open');
	});

}

$(document).on('click', function (event) {
	if($('.menu_open').length){
		var cond_1 = $(event.target).closest(".header").length;
		if (cond_1) {

		}
		else {
			$('body').removeClass('menu_open');

			//$(event.target).closest('.modal_box').removeClass('active');
			//$(event.target).closest('.modal_wrap').fadeOut(100);
			//$('body').removeClass('show_modal');
			event.stopPropagation();
		}
	}



});


//----------------------- Аккордеон товаров
function collapsingBlocks() {
	var $ctrl = $('.acc_title');
	$ctrl.on('click', function () {
		if ($(this).hasClass('acc_title_open')) {
			$(this).removeClass('acc_title_open');
			$(this).next('.acc_content').stop().slideUp();
		}
		else {
			$('.acc_title').removeClass('acc_title_open');
			$('.acc_content').stop().slideUp();
			$(this).addClass('acc_title_open');
			$(this).next('.acc_content').stop().slideDown();
		}
		return false;
	});
}

function collapsingBlocksNotAccordeon() {
	var $ctrl = $('.acc_title_v3');
	$ctrl.on('click', function () {
		if ($(this).hasClass('acc_title_open')) {
			$(this).removeClass('acc_title_open');
			$(this).next('.acc_content').stop().slideUp();
		}
		else {
			$('.acc_title').removeClass('acc_title_open');
			$(this).addClass('acc_title_open');
			$(this).next('.acc_content').stop().slideDown();
		}
		return false;
	});
}

//-------------кнопка Наверх
function move_top() {
	$('.btn_to_top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	})
}

//------------------определение устройтсва
function getDeviceName() {
	var classNames = [];
	if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
	if (navigator.userAgent.match(/android/i)) classNames.push('device-android');

	var html = document.getElementsByTagName('html')[0];

	if (classNames.length) classNames.push('on-device');
	if (html.classList) html.classList.add.apply(html.classList, classNames);
}


//--------------инициализация слайдера в карте товара
function initOwlSlider() {

	$(".object_slider_list").owlCarousel({
		//autoPlay: 3000,
		nav: false,
		items: 1,
		slideSpeed: 700,
		paginationSpeed: 700,
		//singleItem: true,
		loop: true
	});
}


//----------------инициализация модальных окон
function initModalBox(modal_box, control) {
	$(control).on('click', function () {
		show_artic_modal(modal_box);
	});

	function show_artic_modal(modal_box) {
		$(modal_box).arcticmodal({
			overlay: {
				css: {
					backgroundColor: 'none',
					opacity: 1
				}
			}

		});
	}
}

//---------------смена блоков товара в корзине
function slidingInCart() {
	$('.js_obj_control').on('click', function () {
		$(this).closest('.obj_cart_hold').toggleClass('open_count');
		$(this).toggleClass('transition');
	});
	$('.js_obj_control_v2').on('click', function () {
		$(this).toggleClass('transition');
		$(this).closest('.obj_cart_hold').toggleClass('open_delete');
	})
}


//------------удаление товара в корзине (только из DOM)
function deleteObject() {
	$('.js_btn_delete').on('click', function () {
		var $this_parent = $(this).closest('.object_cart');
		$this_parent.slideUp();
		setTimeout(function () {
			$this_parent.remove();
		}, 1000);
	})
}
//------------------показать кнопку удалить в корзине
function showDeleteButton() {
	$('.js_btn_change').on('click', function () {
		$(this).closest('.object_edit').find('.edit_count').fadeOut();
		$(this).closest('.object_edit').find('.btn_delete_hold').fadeIn();
		$(this).fadeOut();
	})
}

//-----------изменение количества в корзине
function countingInput() {
	$('.count_minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.count_plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}


//--------------маска для поля с телефоном
function initPhoneMask() {
	$('.field_telephone').mask("0 000 000 00 00", {placeholder: "_ ___ ___ __ __"});
}


//----------------показать пароль
function initPasswordMask() {
	$("#mypass").passField({
		allowEmpty: false,
		allowAnyChars: false,
		showGenerate: false,
		showWarn: false,
		showTip: false
	});
}
function showRegisterFields(control, show_item) {
	$(control).on('click', function () {
		var $parent = $(this).closest('.radio_item'),
			$check_input = $parent.find('.js_hidden_toggle');

		if ($check_input.is(':checked')) {
			$(show_item).removeClass('show');

		}
		else {
			$(show_item).addClass('show');
		}

	});
}
