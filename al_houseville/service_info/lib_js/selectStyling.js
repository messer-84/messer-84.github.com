function selectStyling(select_class, myClass) {
	$(select_class).selectOrDie({
		customClass: myClass
	});
}