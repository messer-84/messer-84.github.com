$(function () {
	child_ie('.list_v1.ct_1 .item_v1');
	child_ie('.list_v1.ct_2 .item_v1');

});


function child_ie(elem) {
	var $i = 1, $elem = $(elem);
	$elem.each(function () {
		$(this).addClass('child_' + $i);
		$i++;
	});

}