function emulCheckbox1(label) {
	var $label = $(label);
	$label.on('click', function () {
		$label.removeClass('checked');
		$(this).toggleClass('checked');
	});
}
