function emulMediaQuery() {
	var $window_width = $(window).width(),
		$html = $('html'),
		$width_max = 1175,
		$width_min = 539;
	if ($window_width < $width_max) {
		$html.addClass('html_max');
	}

	else {
		$html.removeClass('html_max');
	}
	if ($window_width < $width_min) {
		$html.addClass('html_min');
	}

	else {
		$html.removeClass('html_min');
	}
}