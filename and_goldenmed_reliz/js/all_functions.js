$(function(){
	collapsingBlocks();
	deleteSidebarItem();
	show_modal(".js_order", ".modal_1");
close_modal();
});


function collapsingBlocks(){
	var $ctrl = $('.js_price_ctrl');
	$ctrl.on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).find('.price_control').removeClass('open').text('развернуть');
			$(this).next('.price_main').stop().slideUp();

		}
		else{
			$(this).addClass('open');
			$(this).find('.price_control').addClass('open').text('свернуть');
			$(this).next('.price_main').stop().slideDown();

		}
	});
}
function deleteSidebarItem(){
	if($('.main_page').length){
		$('.sidebar_item').remove();
	}
}

function fadeOutModalWrap(){
	$('.modal_wrap').fadeOut();

}


function show_modal(m_trigger, m_modal) {
	m_trigger = $(m_trigger);
	m_modal = $(m_modal);
	var $modal_wrap = m_modal.closest('.modal_wrap');

	m_trigger.on('click', function () {
		fadeOutModalWrap();

		$modal_wrap.fadeIn();
		m_modal.addClass('active');
		return false;
	});

}
$(document).on('click', function (event) {
	var cond_1 = $(event.target).closest(".modal_box").length;
	if (cond_1) {

	}
	else {
		$(event.target).closest('.modal_box').removeClass('active');
		$(event.target).closest('.modal_wrap').fadeOut(100);
		$('body').removeClass('show_modal');
		$('.goods_item').removeClass('item_active');

		event.stopPropagation();
	}


});

function close_modal() {
	$('.modal_close').on('click', function () {
		$(this).closest(".modal_box").removeClass('active');
		$(this).closest(".modal_wrap").fadeOut();

		$('.goods_item').removeClass('item_active');
		$('body').removeClass('show_modal');
		return false;
	});
}

