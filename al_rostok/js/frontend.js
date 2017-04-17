$(function () {
	slider('.card_slider', '.card_s_item');
	main_slider('.main_slider', '.main_s_item');
	tabs();
	carousel('.gallery_list_v1', '.gallery_item');
	scroll_style();
});


function slider(list, item) {
	var $slider = $(list);
	if ($slider.length) {
		$slider.bxSlider({
			slideSelector: (item),
			nextSelector: $('.next_btn_m'),
			prevSelector: $('.prev_btn_m'),
			prevText: '',
			nextText: '',
			mode: 'fade',
			controls: false
		});
	}
}

function main_slider(list, item) {
	var $slider = $(list);
	if ($slider.length) {
		$slider.bxSlider({
			slideSelector: (item),
			nextSelector: $('.next_btn_m'),
			prevSelector: $('.prev_btn_m'),
			prevText: '',
			nextText: '',
			mode: 'fade',
			controls: true
		});
	}
}


function carousel(list, item) {
	var $slider = $(list);
	if ($slider.length) {
		$slider.bxSlider({
			nextText: '',
			prevText: '',
			pager: false,
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 3,
			slideWidth: 300,
			responsive: false,
			slideSelector: (item),
			nextSelector: $('.next_btn'),
			prevSelector: $('.prev_btn'),
			infiniteLoop: true
		});
	}
}


function tabs() {
	$('dt.tabs_lbl').on('click', function () {
		$(this).siblings().removeClass('selected').end().next('dd.tabs_hold').andSelf().addClass('selected');
	});
}

function scroll_style() {
	var $obj = $('.js_scroll');
	if ($obj.length) {
		$obj.jScrollPane();
	}
}

