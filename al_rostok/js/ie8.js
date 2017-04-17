$(function () {
	checked_ie('.form_lbl_v1');
});


function checked_ie(label) {
	var $label = $(label);
	$label.on('click', function () {
		$(this).toggleClass('checked');
	});
}