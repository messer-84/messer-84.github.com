function initBxSliderOneSlide(slider_class) {
	var $slider = $(slider_class);
		$slider.bxSlider({
			pager: false,
			mode: 'fade',
			controls: true,
			prevText: "",
			nextText: ""
		});
}