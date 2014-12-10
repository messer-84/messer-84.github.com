function emulCheckbox2(label) {
	var $label = $(label);
	$label.on('click', function () {
		$(this).toggleClass('checked');
	});
}