$(document).ready(function () {
	$('.gallery_block .gallery_v1_item:nth-child(5n)').addClass('item_5n');
	$('.scroll-content .gallery_v1_item:nth-child(5n)').addClass('item_5n_mod');
	$('.collections_item:nth-child(4n)').addClass('item_4n');

	$('.collections_i_hidden_block').prepend('<span class=\"hidden_block_after\">&#160;<\/span>');
	$('.gallery_v1_i_hidden_block').prepend("<span class=\"hidden_block_after\">&#160;<\/span>");
	$('.product_hidden_block').prepend("<span class=\"hidden_block_after\">&#160;<\/span>");
	$('.cart').prepend("<span class=\"cart_after\">&#160;<\/span>");
	$('.hline_v3 span').prepend("<i class=\"hline_v3_before\">&#160;<\/i>");
	$('.hline_v3 span').prepend("<i class=\"hline_v3_after\">&#160;<\/i>");
	$('.hline_v3').prepend("<i class=\"hline_v3_line\">&#160;<\/i>");
	$('.hline_v4').prepend("<i class=\"hline_v4_after\">&#160;<\/i>");
	$('.nav_bar li').after("<span>&#160;/</span>");
	$('.gallery_v1').append("<span class=\"scroll_before\">&#160;<\/span>");
	$('.gallery_v1').append("<span class=\"scroll_after\">&#160;<\/span>");

});
