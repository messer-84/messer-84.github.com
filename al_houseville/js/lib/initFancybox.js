function initFancybox(classLink) {
	var $link_fancy = $(classLink);
		$link_fancy.attr('rel', 'gallery');
		$link_fancy.fancybox({
			padding: 0,
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
}