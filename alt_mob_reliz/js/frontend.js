var body_var;
var formMultiSelect;
var searchBox;

$(function () {
	formMultiSelect = $('.form_multiselect');
	body_var = $('body');
	searchBox = $('.search_box');

	searchBoxOpen();
	if ($('.form_sel_v1').length) {
		selectStyling('.form_sel_v1', 'mes_select');
	}
	LazyLoad.css('styles/icons.css');
	nav_open();
	multiSelectInit();
	bounce_fix();

});

function nav_open() {
	$('.js_nav_ctrl').on('click', function () {
		body_var.toggleClass('menu_open');
		if (searchBox.hasClass('open')) {
			formMultiSelect.multipleSelect('blur');
			searchBox.removeClass('open');
			$('.search_control').removeClass('active');
		}
		return false;
	});

}
function searchBoxOpen() {
	$('.search_control').on('click', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			searchBox.removeClass('open');
			formMultiSelect.multipleSelect('blur');
		}
		else {
			$(this).addClass('active');
			searchBox.addClass('open');
		}
		return false;
	});

}

function selectStyling(select_class, myClass) {
	$(select_class).selectOrDie({
		customClass: myClass
	});

}

$(document).on('click', function (event) {
	if ($('.menu_open').length) {
		var cond_1 = $(event.target).closest(".header").length;
		if (cond_1) {

		}
		else {
			body_var.removeClass('menu_open');

			event.stopPropagation();
		}
	}

});

function multiSelectInit() {
	formMultiSelect.multipleSelect({
		placeholder: "All Software",
		selectAllText: 'All Software',
		selectAllDelimiter: ['', '']

	});
}

function bounce_fix() {
	var $document_touchstart = 0,
		$touchstart_scroll = 0;

	document.addEventListener('touchstart', function (event) {
		$document_touchstart = event.touches[0].pageY;
		//alert($document_touchstart);
		$touchstart_scroll = $scroll_top;
	}, false);

	document.addEventListener('touchmove', function (event) {
		var $document_touchmove = event.touches[0].pageY - $document_touchstart;
		//alert($document_touchmove);
		console.log($document_touchmove, $touchstart_scroll, $document_touchstart, $scroll_top);
		//if ($scroll_top == 0 && $document_touchmove > 0 || $touchstart_scroll < $document_touchmove) {
		if ($scroll_top == 0 && $document_touchmove > 0) {
			//alert('test');
			event.preventDefault();
		}
	}, false);

}