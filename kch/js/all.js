$(document).ready(function () {


	need_with();
});



function device_detection() {
	var html = $("html");
	if (navigator.userAgent.indexOf('iPhone') != -1) {
		$(html).addClass('mobile');
	}
	if (navigator.userAgent.indexOf('iPad') != -1) {
		$(html).addClass('mobile');
	}

	var userag = navigator.userAgent.toLowerCase();
	var isAndroid = userag.indexOf("android") > -1;
	if (isAndroid) {
		$(html).addClass('mobile');
	}
}

function fields_text() {
	$("input[type='text'], textarea").each(function () {
		if ($(this).attr("value") == "")
			$(this).attr("value", $(this).attr("title"))
	});

	$("input[type='text'], textarea").focus(function () {
		if ($(this).attr("value") == $(this).attr("title"))
			$(this).attr("value", "")
	});

	$("input[type='text'], textarea").blur(function () {
		if ($(this).attr("value") == "")
			$(this).attr("value", $(this).attr("title"))
	});
}

// slider_line
$(function () {
	//scrollpane parts
	var scrollPane = $(".scroll-pane"),
			scrollContent = $(".scroll-content");

	//build slider
	var scrollbar = $(".scroll-bar").slider({
		slide:function (event, ui) {
			if (scrollContent.width() > scrollPane.width()) {
				scrollContent.css("margin-left", Math.round(
						ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
				) + "px");
			} else {
				scrollContent.css("margin-left", 0);
			}
		}
	});

	//append icon to handle
	var handleHelper = scrollbar.find(".ui-slider-handle")
			.mousedown(function () {
				scrollbar.width(handleHelper.width());
			})
			.mouseup(function () {
				scrollbar.width("100%");
			})
			.append("<span class='ui-icon ui-icon-grip-dotted-vertical'></span>")
			.wrap("<div class='ui-handle-helper-parent'></div>").parent();

	//change overflow to hidden now that slider handles the scrolling
	scrollPane.css("overflow", "hidden");

	//reset slider value based on scroll content position
	function resetValue() {
		var remainder = scrollPane.width() - scrollContent.width();
		var leftVal = scrollContent.css("margin-left") === "auto" ? 0 :
				parseInt(scrollContent.css("margin-left"));
		var percentage = Math.round(leftVal / remainder * 100);
		scrollbar.slider("value", percentage);
	}

	//if the slider is 100% and window gets larger, reveal content
	function reflowContent() {
		var showing = scrollContent.width() + parseInt(scrollContent.css("margin-left"), 10);
		var gap = scrollPane.width() - showing;
		if (gap > 0) {
			scrollContent.css("margin-left", parseInt(scrollContent.css("margin-left"), 10) + gap);
		}
	}

	//change handle position on window resize
	$(window).resize(function () {
		resetValue();
		//sizeScrollbar();
		reflowContent();
	});
	//init scrollbar size
	setTimeout(sizeScrollbar, 10);//safari wants a timeout
});
function need_with() {
	count_item = $('.scroll-content-item').size();
	block_width = (count_item * 223) - 7;
	$('.scroll-content').width(block_width);
}



