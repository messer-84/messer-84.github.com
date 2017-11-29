import React, {Component} from 'react';

class Task_c_6_8 extends Component {
	constructor() {
		super();
		this.state = {
			yearStart: 1970,
			currentYear: new Date().getFullYear(),
			currentMonth: new Date().getMonth(),
			currentDate: new Date().getDate(),
			yearsArray: null,
			monthsArray: [
				'Январь',
				'Февраль',
				'Март',
				'Апрель',
				'Май',
				'Июнь',
				'Июль',
				'Август',
				'Сентябрь',
				'Октябрь',
				'Ноябрь',
				'Декабрь',
			],
		};
	}

	componentDidMount() {
		this.initialYearsArray();
	}

	initialYearsArray() {
		const {currentYear, yearStart} = this.state;
		const yearsArray = [];

		for (let i = yearStart; i <= currentYear; i++) {
			yearsArray.push(i);
		}
		this.setState({
			yearsArray
		});

	}

	updateDate = e => {
		this.setState({
			currentDate: parseInt(e.target.value),
		});
	};

	updateMonth = e => {
		this.setState({
			currentMonth: parseInt(e.target.value),
		});

	};

	updateYear = e => {
		this.setState({
			currentYear: parseInt(e.target.value),
		});
	};

	render() {
		const {
				yearsArray,
				monthsArray,
				currentDate,
				currentMonth,
				currentYear,
		} = this.state;
		const date = new Date(currentYear, currentMonth, currentDate);
		const actualDay = date.toLocaleString('ru', {weekday: 'long'});
		const countDays = new Date(currentYear, currentMonth + 1, 0).getDate();
		const daysArray = [];

		for (let i = 1; i <= countDays; i++) {
			daysArray.push(i);
		}

		const daysList = daysArray.map((item, i) => {
			return (
					<option value={i + 1} key={i}>
						{item}
					</option>
			);
		});

		const monthsList = monthsArray.map((item, i) => {
			return (
					<option value={i} key={i}>
						{item}
					</option>
			);
		});
		const yearsList = yearsArray
				? yearsArray.map((item, i) => {
					return (
							<option value={item} key={i}>
								{item}
							</option>
					);
				})
				: null;

		return (
				<div className="app">
					<div>
						<select onChange={e => this.updateDate(e)} value={currentDate}>
							{daysList}
						</select>
						<select onChange={e => this.updateMonth(e)} value={currentMonth}>
							{monthsList}
						</select>
						<select onChange={e => this.updateYear(e)} value={currentYear}>
							{yearsList}
						</select>
					</div>
					<p>День недели: {actualDay}</p>
				</div>
		);
	}
}

export default Task_c_6_8;
