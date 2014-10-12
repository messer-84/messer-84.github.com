$(function () {
	checked_ie('.lbl_rad');
	checked_ie_v2('.lbl_check');

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