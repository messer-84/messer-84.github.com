$(function () {
	changeLocality();
	show_modal(".js_register", ".modal_1");
	show_modal(".js_locality", ".modal_2");
	placeholder_emul();

	close_modal();
	categoriesAccordeon();

	if ($('.form_select_v1').length) {
		selectStyling('.form_select_v1', 'mes_select');
	}

	modificationRegisterForm('.js_control_person', '.form_item_person', '.form_item_org');
	modificationRegisterForm('.js_control_org', '.form_item_org', '.form_item_person');
});


function show_modal(m_trigger, m_modal) {
	var $m_trigger = $(m_trigger);
	var $m_modal = $(m_modal);
	var $modal_wrap = $m_modal.closest('.modal_wrap');

	$m_trigger.on('click', function () {
		$('.modal_wrap').fadeOut();
		$modal_wrap.fadeIn();
		$m_modal.addClass('active');
		return false;
	});

}
$(document).on('click', function (event) {
	var cond_1 = $(event.target).closest(".modal_box").length;
	if (cond_1) {

	}
	else {
		$(event.target).find('.modal_box').removeClass('active');
		$(event.target).closest('.modal_wrap').fadeOut(700);
		$('body').removeClass('show_modal');

		event.stopPropagation();
	}


});

function close_modal() {
	$('.modal_close').on('click', function () {
		var $this = $(this);
		$this.closest(".modal_box").removeClass('active');
		$this.closest(".modal_wrap").fadeOut();

		$('body').removeClass('show_modal');
		return false;
	});
}

function categoriesAccordeon() {
	$('.ctg_item_title.mod_parent').on('click', function () {
		var objThis = $(this);
		var showBlock = objThis.closest('.ctg_m_item').find('.ctg_i_content');

		if (objThis.hasClass('active')) {
			objThis.removeClass('active');
			showBlock.stop().slideUp();
		}
		else {
			objThis.addClass('active');
			showBlock.stop().slideDown();
		}
		return false;
	})
}
function selectStyling(select_class, myClass) {
	$(select_class).selectOrDie({
		customClass: myClass
	});

}


function modificationRegisterForm(control, show_item, hide_item) {
	$(control).on('click', function () {
		var $parent = $(this).closest('.checkbox_item'),
			$check_input = $parent.find('.inp_radio');

		if ($check_input.is(':checked')) {

		}
		else {
			$(show_item).addClass('show');
			$(hide_item).removeClass('show')
		}

	});
}

function changeLocality() {
	$('.loc_i_link').on('click', function () {
		var text_control = $(this).text();
		$('.js_locality span').text(text_control);
		$('.modal_close').trigger('click');
		$('.loc_i_link').removeClass('active');
		$(this).addClass('active');
	})
}

function placeholder_emul() {
	if (!Modernizr.input.placeholder) {

		$('[placeholder]').focus(
			function () {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}
			}).blur(
			function () {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
		$('[placeholder]').parents('form').submit(function () {
			$(this).find('[placeholder]').each(function () {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});

	}
}
