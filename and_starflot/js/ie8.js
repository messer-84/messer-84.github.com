$(function(){
	content_resize();

});


$(window).resize(function () {
	content_resize();
});

function content_resize() {
	var $window_width = $(window).width(),
		$html = $('html');
	if ($window_width < 1200) {
		$html.addClass('wrapper_min');
	}

	else {
		$html.removeClass('wrapper_min');
	}
}