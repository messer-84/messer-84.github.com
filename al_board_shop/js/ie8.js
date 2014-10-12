$(function () {
	checked_ie('.size_lbl');
	checked_ie_v2('.form_lbl_check_v1');

	htmlToggleClass(640, 'html_min');
	htmlToggleClass(1094, 'html_w_1094');
	htmlToggleClass(1200, 'html_w_1200');
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



$(window).resize(function () {
	htmlToggleClass(640, 'html_min');
	htmlToggleClass(1094, 'html_w_1094');
	htmlToggleClass(1200, 'html_w_1200');

});




function htmlToggleClass(html_width, html_class) {
	var $window_width = $(window).width(),
		$html = $('html');
	if ($window_width < html_width) {
		$html.addClass(html_class);
	}

	else {
		$html.removeClass(html_class);
	}
	console.log(html_width);

}