import React, {Component} from 'react';

/*
Дан селект. Изначально он пустой. Дан инпут и кнопка.
 В этот инпут вводится название города. По нажатию на кнопку
  этот город должен попасть в селект. Пользователь нашего
  скрипта добавляет несколько городов в селект,
   затем выбирает один из добавленных городов - и этот город
    должен отобразиться на экране в каком-нибудь абзаце.
 * */

class Task_h_7_12 extends Component {
	constructor() {
		super();
		this.state = {
			cities: [],
			selectValue: 0,
			inputValue: '',
			showCity: ''
		};
	}

	addCity = (e) => {
		e.preventDefault();
		const cities = [...this.state.cities];
		const citiesLength = cities.length;

		const currentInputValue = this.state.inputValue;
		cities.push(currentInputValue);

		this.setState({
			cities,
			inputValue: '',
			selectValue: !!citiesLength ?citiesLength : 0
		});
	};

	updateValue = (e) => {
		this.setState({
			inputValue: e.target.value
		});

	};
	updateSelectValue = (e) => {
		const newValue = parseInt(e.target.value);
		this.setState({
			selectValue: newValue,
			showCity: this.state.cities[newValue]
		});
	};

	render() {
		const {cities, selectValue, inputValue, showCity} = this.state;
		console.log(cities.length-1);
		const optionList = cities.map((item, index) => {
			return <option key={index} value={index}>{item}</option>
		});

		return (
				<div className="app">
					<h1>Task home-7-12</h1>
					<div>
						<form action="#" onSubmit={e=>{this.addCity(e)}}>
							<input type="text" value={inputValue} onChange={e => {
								this.updateValue(e)
							}} />
							<button>Submit</button>
						</form>

					</div>
					<select value={selectValue} onChange={e=>this.updateSelectValue(e)}>
						{optionList}
					</select>
					{showCity && <p>Выбранный город: {showCity}</p>}
				</div>
		);
	}
}

export default Task_h_7_12;
