function carousel(list) {
	$(list).bxSlider({
		nextText: '',
		prevText: '',
		pager: true,
		minSlides: 3,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 1000,
		responsive: false,
		infiniteLoop: true
	});

}