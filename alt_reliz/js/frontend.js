$(function () {
	emulPlaceholder();
	collapsingBlocks();
	if ($('.form_sel_v1').length) {
		selectStyling('.form_sel_v1', 'mes_select');
	}
	voteInit();
	changeLang();
	multiSelectInit();
	LazyLoad.css('styles/icons.css');
});


function collapsingBlocks() {
	var $ctrl = $('.js_ctg_show');
	$ctrl.on('click', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.search_res_category').stop().slideUp();

		}
		else {
			$(this).addClass('open');
			$('.search_res_category').stop().slideDown();
		}
		return false;
	});
}


function emulPlaceholder() {
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
function selectStyling(select_class, myClass) {
	$(select_class).selectOrDie({
		customClass: myClass
	});

}

function voteInit() {
	var $control = $('.vote_f_btn');
	var $holder_class = '.vote_func_hidden';
	var $holder_glob = $('.vote_func_hidden');

	showHideBlock();
	voteInit();
	removeVoteInit();

	function showHideBlock() {
		$control.on('click', function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next($holder_class).fadeOut();

			}
			else {
				$control.removeClass('active');
				$holder_glob.fadeOut(100);
				$(this).addClass('active');
				$(this).next($holder_class).fadeIn();
			}
			return false;

		});
	}

	function voteInit() {
		$('.vote_i_link').on('click', function () {
			var $holder = $(this).closest($holder_class);
			var $remove_btn = $holder.find('.remove_btn');

			if ($remove_btn.hasClass('mod_hide')) {
				$holder.removeClass('min_width');
				$remove_btn.fadeIn();
			}
			if ($(this).hasClass('active')) {

			}
			else {
				$('.vote_i_link').removeClass('active');
				$(this).addClass('active');
			}
			return false;
		});
	}

	function removeVoteInit() {
		$('.remove_btn').on('click', function () {
			$('.vote_i_link').removeClass('active');
			$(this).addClass('mod_hide').fadeOut(100);
			$(this).closest('.vote_func_hidden').addClass('min_width');
			return false;
		})
	}


}

$(document).on('click', function (event) {
	var cond_1 = $(event.target).closest(".vote_func_hidden").length;
	if (cond_1) {

	}
	else {
		$('.vote_func_hidden').hide(100);
		$('.vote_f_btn').removeClass('active');
		event.stopPropagation();
	}

});
function changeLang() {
	$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
		effect: 'fade',
		testMode: true,
		onChange: function (evt) {
			//alert("The selected language is: "+evt.selectedItem);
		}

	});
}

function multiSelectInit() {
	$('.form_multiselect').multipleSelect({
		placeholder: "All Software",
		selectAllText: 'All Software',
		selectAllDelimiter: ['', '']
	});
}