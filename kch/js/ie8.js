$(document).ready(function () {
	$('.gallery_block .gallery_v1_item:nth-child(5n)').addClass('item_5n');
	$('.scroll-content .gallery_v1_item:nth-child(5n)').addClass('item_5n_mod');
	$('.collections_item:nth-child(4n)').addClass('item_4n');
	$('.gallery_v1').append("<span class=\"scroll_before\">&#160;<\/span>");
	$('.gallery_v1').append("<span class=\"scroll_after\">&#160;<\/span>");


});
