(function () {
	const prices = {
		personWeekday: 50,
		personWeekend: 70,
		groupWeekday: 40,
		groupWeekend: 45
	};
	const pricesHtml = {
		personWeekday: document.querySelector(".person_row .weekday_"),
		personWeekend: document.querySelector(".person_row .weekend_"),
		groupWeekday: document.querySelector(".group_row .weekday_"),
		groupWeekend: document.querySelector(".group_row .weekend_")
	};
	const exchange = "грн.";
	let totalPriceHtml = document.querySelector("#outputTotalPrice");
	let countHtml = document.querySelector("#inputCounter");
	const minusBtn = document.querySelector(".prefix");
	const plusBtn = document.querySelector(".postfix");
	const typePersonHtml = document.querySelector("#typePerson");
	const typeGroupHtml = document.querySelector("#typeGroup");
	const resultsBlock = document.querySelector('.results');
	const nowYear = new Date().getFullYear();
	const monthsArray = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];
	const yearHtml = document.querySelector("#inputYear");
	const monthsHtml = document.querySelector("#inputMonth");
	const daysHtml = document.querySelector('#inputDate');
	const radioArray = document.getElementsByName("typeOrder");
	let actualPrice;
	let typeOrder = '';
	let typeDay = '';
	let actualCount = 1;

	function createPrices() {
		for (let key in pricesHtml) {
			pricesHtml[key].textContent = prices[key];
		}
	}

	function createMonths() {
		let monthsStr = "";
		monthsArray.forEach((item, index) => {
			monthsStr += `<option value='${index}'>${item}</option>`;
		});
		monthsHtml.innerHTML = monthsStr;
	}

	function createDays(month) {
		let newCountDays = new Date(nowYear, +month + 1, 0).getDate();
		let daysStr = "";

		for (let i = 1; i < newCountDays + 1; i++) {
			daysStr += `<option value='${i}'>${i}</option>`;
		}
		daysHtml.innerHTML = daysStr;
	}

	function setTypeDay(month, day) {
		let dayIndex = new Date(nowYear, +month, +day).getDay();
		if (dayIndex === 0 || dayIndex === 6) {
			typeDay = 'weekend';
		}
		else {
			typeDay = 'weekday';
		}

	}

	function setTypeOrder() {
		[...radioArray].forEach((item, index) => {
			if (item.checked) {
				typeOrder = index === 0 ? 'person' : 'group';
			}
		});
	}

	function setCountValue() {
		countHtml.value = typeOrder === 'person' ? 1 : 10;
	}

	function checkTypeOrder(count) {
		if (count > 9) {
			radioArray[0].checked = false;
			radioArray[1].checked = true;
		}
		else {
			radioArray[0].checked = true;
			radioArray[1].checked = false;

		}
		setTypeOrder();
		setActualPrice();
	}

	function setActualPrice() {
		const isWeekday = typeDay === 'weekday';
		const isWeekend = typeDay === 'weekend';
		const isPerson = typeOrder === 'person';
		const isGroup = typeOrder === 'group';


		if (isPerson && isWeekday) {
			actualPrice = prices.personWeekday;
		}
		else if (isPerson && isWeekend) {
			actualPrice = prices.personWeekend;
		}
		else if (isGroup && isWeekday) {
			actualPrice = prices.groupWeekday;

		}
		else if (isGroup && isWeekend) {
			actualPrice = prices.groupWeekend;
		}
		setTotalPrice();
	}

	function setTotalPrice() {
		totalPriceHtml.textContent = countHtml.value * actualPrice + exchange;

		resultsBlock.innerHTML = `typeOrder - ${typeOrder}; typeDay - ${typeDay}; actualPrice - ${actualPrice}; count - ${countHtml.value}`;
	}

	function events() {
		monthsHtml.addEventListener("change", e => {
			setTypeDay(monthsHtml.value, daysHtml.value);
			createDays(monthsHtml.value);
			setActualPrice();
		});
		daysHtml.addEventListener("change", e => {
			setTypeDay(monthsHtml.value, daysHtml.value);
			setActualPrice();
		});
		typePersonHtml.addEventListener("click", e => {
			setTypeOrder();
			setCountValue();
			setActualPrice();
		});
		typeGroupHtml.addEventListener("click", e => {
			setTypeOrder();
			setCountValue();
			setActualPrice();
		});
		minusBtn.addEventListener("click", e => {
			countHtml.value = +countHtml.value - 1;
			checkTypeOrder(parseInt(countHtml.value));
		});
		plusBtn.addEventListener("click", e => {
			countHtml.value = +countHtml.value + 1;
			checkTypeOrder(parseInt(countHtml.value));
		});
		countHtml.addEventListener("input", e => {
			checkTypeOrder(parseInt(countHtml.value));
		});
	}

	function init() {
		yearHtml.innerHTML = `<option value='${nowYear}'>${nowYear}</option>`;
		createPrices();
		createMonths();
		createDays(monthsHtml.value);
		setTypeDay(monthsHtml.value, daysHtml.value);
		setTypeOrder();
		setCountValue();
		setActualPrice();
		setTotalPrice();
	}

	init();
	events();

})();
