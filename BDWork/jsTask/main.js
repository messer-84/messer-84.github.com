//смена даты - может менять totalPrice
//смена месяца - может менять totalPrice
//если count > 9 - делать typeOrder - group и менять цену и totalPrice
//если count < 9 - делать typeOrder - group и менять цену и totalPrice

//
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


	const nowDate = new Date();
	const nowYear = nowDate.getFullYear();
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
	let typeOrder = 'person';
	let typeDay = '';
	let actualCount = 1;

	yearHtml.innerHTML = `<option value='${nowYear}'>${nowYear}</option>`;


	(function createPrices() {
		for (let key in pricesHtml) {
			pricesHtml[key].textContent = prices[key];
		}

	})();
	(function createMonths() {
		let monthsStr = "";
		monthsArray.forEach((item, index) => {
			monthsStr += `<option value='${index}'>${item}</option>`;
		});

		// monthsHtml.insertAdjacentHTML('beforeEnd', monthsStr);
		monthsHtml.innerHTML = monthsStr;
	})();

	function createDays(month) {
		let newCountDays = new Date(2017, +month + 1, 0).getDate();

		let daysStr = "";
		for (let i = 1; i < newCountDays + 1; i++) {
			daysStr += `<option value='${i}'>${i}</option>`;
		}
		daysHtml.innerHTML = daysStr;
	}

	createDays(monthsHtml.value);


	monthsHtml.addEventListener("change", e => {
		createDays(monthsHtml.value);
	});

	daysHtml.addEventListener("change", e => {
		checkDay(monthsHtml.value, daysHtml.value);
		getActualPrice();
		setTotalPrice();
	});


	function checkDay(month, day) {
		let newDate = new Date(2017, +month, +day);
		typeDay = newDate.getDay() < 5 ? 'weekday' : 'weekend';
	}

	checkDay(monthsHtml.value, daysHtml.value);


	function checkTypeOrder() {
		[...radioArray].forEach((item, index) => {
			if (item.checked) {
				typeOrder = index === 0 ? 'person' : 'group';
			}
		});
	}

	checkTypeOrder();


	function setCountValue() {
		countHtml.value = typeOrder === 'person' ? 1 : 10;
	}

	setCountValue();

	function setTotalPrice() {
		totalPriceHtml.textContent = countHtml.value * actualPrice + exchange;
	}

	setTotalPrice();

	function changeTypeOrder(count) {
		console.log(count);

		if(count > 2 ){
			// radioArray[0].checked = false;
			radioArray[0].checked = false;
			radioArray[1].checked = true;

		}
		else{
			// radioArray[0].checked = true;
			// radioArray[1].checked = false;

		}
	}

	function getActualPrice() {
		let countNow = parseInt(countHtml.value);
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
		// console.log(actualPrice);
	}

	getActualPrice();


	typePersonHtml.addEventListener("click", e => {
		checkTypeOrder();
		getActualPrice();
		setCountValue();
		setTotalPrice();
		console.log(typeDay, typeOrder, actualPrice);


	});
	typeGroupHtml.addEventListener("click", e => {
		checkTypeOrder();
		getActualPrice();
		setCountValue();
		setTotalPrice();

		console.log(typeDay, typeOrder, actualPrice);


	});

	minusBtn.addEventListener("click", e => {
		checkTypeOrder();
		getActualPrice();
		console.log(typeDay, typeOrder, actualPrice);

		totalPriceHtml.textContent =
				--countHtml.value * actualPrice + exchange;
	});

	plusBtn.addEventListener("click", e => {
		checkTypeOrder();
		getActualPrice();

		console.log(typeDay, typeOrder, actualPrice);
		countHtml.value = +countHtml.value + 1;
		// console.log(parseInt(countHtml.value));

		if(parseInt(countHtml.value) > 2){
			changeTypeOrder(parseInt(countHtml.value));

			totalPriceHtml.textContent = countHtml.value * actualPrice + exchange;

		}
		else{
		totalPriceHtml.textContent = countHtml.value * actualPrice + exchange;
		}

	});


	countHtml.addEventListener("input", e => {
		totalPriceHtml.textContent =
				countHtml.value * actualPrice + exchange;
	});

	totalPriceHtml.textContent =
			countHtml.value * actualPrice + exchange;
	console.log(typeOrder, typeDay, actualPrice);


})();
