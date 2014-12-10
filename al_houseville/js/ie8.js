$(function () {
	checked_ie('.lbl_rad');
	checked_ie_v2('.lbl_check');
	emulMediaQuery();
});


function checked_ie(label) {
	var $label = $(label);
	$label.on('click', function () {
		$label.removeClass('checked');
		$(this).toggleClass('checked');
	});
}
function checked_ie_v2(label) {
	var $label = $(label);
	$label.on('click', function () {
		$(this).toggleClass('checked');
	});
}

$(function () {


});


$(window).resize(function () {
	emulMediaQuery();
});

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