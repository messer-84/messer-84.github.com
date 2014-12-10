function initTabsIndex(parent) {
	var $parent = $(parent),
		$tabs_item = $parent.find(".tabs_item"),
		$tabs_content = $parent.find(".tabs_c_item");

	$tabs_item.on('click', function () {
		var tab = $(this),
			tab_index = tab.attr("data-tab");

		$tabs_item.removeClass('selected');
		$tabs_content.removeClass('selected');

		tab.addClass('selected');

		$tabs_content.each(function () {
			if ($(this).attr("data-content") == tab_index) {
				$(this).addClass('selected');
			}
		});

	});
}