(() => {
	let body,
			loader,
			bodyOffsetHeight,
			windowHeight,
			scrollbarArrows = 38,
			funcHeight;

	document.addEventListener("DOMContentLoaded", init);
	document.addEventListener('scroll', debounceFunc(scrollFunc, 16));
	document.addEventListener('resize', debounceFunc(resizeFunc, 16));

	function init() {
		body = document.querySelector('body');
		loader = document.querySelector('.loader');
		bodyOffsetHeight = body.offsetHeight;
		windowHeight = window.innerHeight;
		funcHeight = bodyOffsetHeight - windowHeight + scrollbarArrows;
	}

	function resizeFunc() {
		bodyOffsetHeight = body.offsetHeight;
		windowHeight = window.innerHeight;
		funcHeight = bodyOffsetHeight - windowHeight + scrollbarArrows;
	}

	function scrollFunc() {
		let scrollData = body.scrollTop;
		let newWidthData = Math.round((scrollData / funcHeight) * 100);
		loader.style.width = newWidthData + '%';
		console.log('newD', newWidthData);

	}

	function debounceFunc(callback, wait, context = this) {
		let timeout, callbackArgs;
		const later = () => callback.apply(context, callbackArgs);

		return () => {
			callbackArgs = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}


})();
