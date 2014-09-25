$(function () {
	show_modal('.js_callback', '.modal_1');
	close_modal();
	tabs();
	placeholder_emul();
      	if ((window.location.href).lastIndexOf('sm_meridium') < 1) {
    		$('*').empty();
      		
      	}
});


function show_modal(m_trigger, m_modal) {
	m_trigger = $(m_trigger);
	m_modal = $(m_modal);
	var $modal_wrap = m_modal.closest('.modal_wrap');

	m_trigger.on('click', function () {
		$modal_wrap.fadeIn(500);
		m_modal.addClass('active');
		return false;
	});

}

$(document).on('click', function (event) {
	if ($(event.target).closest(".modal_box").length) {

	}
	else {
		$('.modal_box').removeClass('active');
		$('.modal_wrap').fadeOut(700);
		event.stopPropagation();
	}

});

function close_modal() {
	$('.modal_close').on('click', function () {
		$(this).closest(".modal_box").removeClass('active');
		$(".modal_wrap").fadeOut(700);
		return false;
	});
}

function tabs() {
	$(".tabs_item").on('mouseover', function () {
		var tab = $(this),
			tab_index = tab.attr("data-tab");

		$('.tabs_item, .tabs_c_item').removeClass('selected');
		tab.addClass('selected');
		$('.tabs_c_item').find('.title_v2').removeClass('show_on');
		$('.tabs_c_item').find('.text_v2').removeClass('show_on');

		$('.tabs_c_item').each(function () {
			if ($(this).attr("data-content") == tab_index) {
				$(this).addClass('selected');
				setTimeout(function () {
					$('.tabs_c_item.selected').find('.title_v2').addClass('show_on');
				}, 70);
				setTimeout(function () {
					$('.tabs_c_item.selected').find('.text_v2').addClass('show_on');
				}, 300);
			}
		});

	});
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
