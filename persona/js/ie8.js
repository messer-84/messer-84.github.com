$(function () {
	child_ie('.nav_item');

	function child_ie(item) {
		var $i = 1;
		$(item).each(function () {
			$(this).addClass('child_' + $i);
			$i++;
		});

	}

});