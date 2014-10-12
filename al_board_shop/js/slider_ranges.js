$(function () {
	slider_f('#slider', '.inpMin_1', '.inpMax_1', 145, 170, 150, 169, 1);
	slider_f('#slider_2','.inpMin_2', '.inpMax_2', 0, 25000, 4000, 23000, 50);
});
function slider_f(slider,inputMin,inputMax, valMin, valMax, valBegin, valEnd, steps) {
	var $slider = $(slider),
		$inputMin = $(inputMin),
		$inputMax = $(inputMax);

	$slider.slider({
		min: valMin,
		max: valMax,
		values: [valBegin, valEnd],
		range: true,
		step: steps,
		stop: function (event, ui) {
			$inputMin.val($slider.slider("values", 0));
			$inputMax.val($slider.slider("values", 1));

		},
		slide: function (event, ui) {
			$inputMin.val($slider.slider("values", 0));
			$inputMax.val($slider.slider("values", 1));
		}
	});


	// фильтрация ввода в поля
	$('input.range_field').keypress(function (event) {
		var key, keyChar;
		if (!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if (event.which) key = event.which;

		if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
		keyChar = String.fromCharCode(key);

		if (!/\d/.test(keyChar))    return false;

	});


}
