var $body,
		windowHeight,
		windowWidth,
		$menuTrigger,
		$scrollTop,
		$menu_state = false,
		mediaPoint1 = 1024,
		mediaPoint2 = 768,
		mediaPoint3 = 480,
		mediaPoint4 = 320,
		$slick;

var JD = {};

JD.debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
				args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);
		if (callNow) {
			func.apply(context, args);
		}
	};
};


$(document).ready(function ($) {
	$body = $('body');
	$menuTrigger = $('.menuTrigger');
	$slick = $('.js_full_slider');
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	// svg icons for IE
	svg4everybody();

	$menuTrigger.on('click', function () {
		if ($menu_state) {
			$menu_state = false;
			$body.removeClass('menu_open');
		} else {
			$menu_state = true;
			$body.addClass('menu_open');
		}
	});


	//developer funcitons
	pageWidget(['index', 'amenities', 'avail', 'neighborhood', 'ramsa', 'residences', 'team', 'contact', 'press']);
	// getAllClasses('html','.elements_list');

});

$(window).on('load', function () {
	loadFunc();

});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('resize', $.throttle(200, function (e) {


	if(windowWidth > 1260){
		$slick.slick('unslick');
		$slick.slick({
			infinite: true,
			speed: 500,
			centerMode: true,
			centerPadding: (windowWidth - 1260) / 2 + 'px',
			slidesToShow: 1,
			arrows: true,
			cssEase: 'ease-in-out'
		});
	}else {
		$slick.slick('unslick');
		$slick.slick({
			infinite: true,
			speed: 500,
			// centerMode: true,
			// centerPadding: (windowWidth - 1260) / 2 + 'px',
			slidesToShow: 1,
			arrows: true,
			cssEase: 'ease-in-out'
		});
	}



}));

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	showPlan();
	// reasonSlider();
	// goodsSlider();
	fullSlider();
	placeholder_emul();
	stylingSelect('.contact_select', 'contact_mod');
	// stylingSelect('.select2Mod.filter_select', 'filter_select');

	// emulationSlickArrow('.slick_arrow.prev', '.slick-arrow.slick-prev');
	// emulationSlickArrow('.slick_arrow.next', '.slick-arrow.slick-next');
}
function resizeFunc() {
	updateSizes();
}

function scrollFunc() {
	$scrollTop = $(window).scrollTop();

	stickyMenu();
}

function updateSizes() {

	windowWidth = $(window).width();
	windowHeight = $(window).height();
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
			(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

			image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
		});
	});
}

function showPlan() {
	var resBtn = $('.res_btn_view');
	var parentBtn = $('.residences_t_row');
	var hideBlock = $('.residences_t_hide');

	resBtn.on('click', function () {
		var that = $(this);
		var thatParent = that.closest(parentBtn);

		if (!that.hasClass('open')) {
			closePlan(resBtn, parentBtn, hideBlock);
			that.addClass('open');
			thatParent.addClass('open');
			thatParent.find(hideBlock).slideDown();
			that.text('CLOSE');
		}
		else {
			closePlan(this, parentBtn, hideBlock);
		}
		return false;
	})
}

function closePlan(obj, parent, hideBlock) {
	$(obj).removeClass('open');
	$(obj).closest(parent).removeClass('open');
	$(obj).closest(parent).find(hideBlock).slideUp();
	$(obj).text('VIEW FLOOR PLAN');

}

function stickyMenu() {
	if ($scrollTop > 0) {
		$body.addClass('stickytop_mod');
	}
	else {
		$body.removeClass('stickytop_mod');
	}
}

function fullSlider() {

	$slick.slick({
		infinite: true,
		speed: 500,
		centerMode: true,
		centerPadding: (windowWidth - 1260) / 2 + 'px',
		slidesToShow: 1,
		arrows: true,
		cssEase: 'ease-in-out',
		responsive: [
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 1,
					centerPadding: (windowWidth - 1260) / 2 + 'px',
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					centerPadding: 0
				}
			}
		]
	});
	// unslick
}

function reasonSlider() {
	$('.js_slick').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true

				}
			}
		]

	});
}
function goodsSlider() {
	$('.js_goods_slick').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		cssEase: 'linear'
	});
}

function placeholder_emul() {

	$('.form_field').focus(
			function () {
				var input = $(this);
				if (input.val() == input.attr('data-place')) {
					input.val('');
					input.removeClass('placeholder');
				}
			}).blur(
			function () {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('data-place')) {
					input.addClass('placeholder');
					input.val(input.attr('data-place'));
				}
			}).blur();
	$('.form_field').parents('form').submit(function () {
		$(this).find('.form_field').each(function () {
			var input = $(this);
			if (input.val() == input.attr('data-place')) {
				input.val('');
			}
		})
	});

}


function emulationSlickArrow(copy, original) {
	$(copy).on('click', function () {
		$(original).trigger('click');
	})
}
function stylingSelect(block, myClass) {
	$(block).select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: myClass
	});
}

//Functions for development
function getAllClasses(context, output) {
	var finalArray = [],
			mainArray = [],
			allElements = $(context).find($('*'));//get all elements of our page
	//If element has class push this class to mainArray
	for (var i = 0; i < allElements.length; i++) {
		var someElement = allElements[i],
				elementClass = someElement.className;
		if (elementClass.length > 0) {//if element have not empty class
			//If element have multiple classes - separate them
			var elementClassArray = elementClass.split(' '),
					classesAmount = elementClassArray.length;
			if (classesAmount === 1) {
				mainArray.push('.' + elementClassArray[0] + ' {');
			} else {
				var cascad = '.' + elementClassArray[0] + ' {';
				for (var j = 1; j < elementClassArray.length; j++) {
					cascad += ' &.' + elementClassArray[j] + ' { }';
				}
				mainArray.push(cascad);
			}
		}
	}

	//creating finalArray, that don't have repeating elements
	var noRepeatingArray = unique(mainArray);
	noRepeatingArray.forEach(function (item) {
		var has = false;
		var preWords = item.split('&');
		for (var i = 0; i < finalArray.length; ++i) {
			var newWords = finalArray[i].split('&');
			if (newWords[0] == preWords[0]) {
				has = true;
				for (var j = 0; j < preWords.length; ++j) {
					if (newWords.indexOf(preWords[j]) < 0) {
						newWords.push(preWords[j]);
					}
				}
				finalArray[i] = newWords.join('&');
			}
		}
		if (!has) {
			finalArray.push(item);
		}
	});
	for (var i = 0; i < finalArray.length; i++) {
		$('<div>' + finalArray[i] + ' }</div>').appendTo(output);
	}


	//function that delete repeating elements from arrays, for more information visit http://mathhelpplanet.com/static.php?p=javascript-algoritmy-obrabotki-massivov
	function unique(A) {
		var n = A.length, k = 0, B = [];
		for (var i = 0; i < n; i++) {
			var j = 0;
			while (j < k && B[j] !== A[i]) j++;
			if (j == k) B[k++] = A[i];
		}
		return B;
	}
}

function pageWidget(pages) {
	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
	widgetWrap.prependTo("body");
	for (var i = 0; i < pages.length; i++) {
		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
	}
	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:"Dev nav";position:absolute;top:0;left:100%;width:86px;height:24px; line-height:24px;padding-left: 25px;color: #fff; background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 2px 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
	widgetStilization.prependTo(".widget_wrap");
}


