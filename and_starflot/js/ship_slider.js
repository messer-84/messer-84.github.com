$(function () {
	ship_slider();


});

function get_size() {
	var $slider_w = $('#slider').width(),
		$slider_item_w = ($slider_w / 5) - 12;
	return $slider_item_w;
}

$(window).resize(function () {
	get_size();
	ship_slider();

});

function ship_slider() {
	var $carousel = $('#carousel'),
		$slider = $('#slider');

	$carousel.flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: get_size(),
		itemMargin: 10,
		asNavFor: '#slider'
	});

	$slider.flexslider({
		animation: "fade",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
}


