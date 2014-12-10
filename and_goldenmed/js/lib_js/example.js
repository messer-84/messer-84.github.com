$(function () {
	if ($('.request_box').length) {
		showRequestBox();
	}
	if ($('.search_box').length) {
		showSearchBox();
	}
	if ($('.carousel_obj_list').length) {
		carousel('.carousel_obj_list');
	}
	if ($('.main_slider').length) {
		initBxSliderOneSlide('.main_slider');
	}
	if ($('.form_sel_v1').length) {
		selectStyling('.form_sel_v1', 'myClass-1');
	}
	if ($('.car_link').length) {
		initFancybox('.car_link');
	}
	if ($('.tabs_block').length) {
		initTabsIndex('.tabs_block');
	}
	emulPlaceholder();
	//if ((window.location.href).lastIndexOf('reliz') < 1) {
	//	$('*').css({'position':'absolute'});
	//
	//}
});
//@prepros-append lib_js/emulPlaceholder.js
//@prepros-append lib_js/initFancybox.js
//@prepros-append lib_js/selectStyling.js
//@prepros-append lib_js/initBxSliderOneSlide.js
//@prepros-append lib_js/initTabsIndex.js