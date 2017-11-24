import React, {Component} from 'react';

/*
 *
 Дан массив с числами. Сделайте так, чтобы каждый элемент этого массива
 записался в свой инпут. С помощью каждого инпута можно поредактировать
 тот элемент массива, который в нем записан. Сделайте так, чтобы под всеми
 инпутами выводилась сумма элементов этого массива.
 *
 * */

class Task_h_7_3 extends Component {
	constructor() {
		super();
		this.state = {
			numbers: [1, 2, 3, 4, 5, 6, 7, 9, 10],
		};
	}



	updateValue = (e, index) => {
		const numbers = [...this.state.numbers];
		numbers[index] = parseInt(e.target.value);

		this.setState({
			numbers
		});
	};


	render() {
		const {numbers} = this.state;
		const sumNumbers = numbers.reduce((a, b) => a + b);
		const list = numbers.map((item, index) => {
			return (
					<li key={index}>
						<input
								type="text"
								value={item}
								onChange={e => this.updateValue(e, index)} />
					</li>
			);
		});
		return (
				<div className="app">
					<ul>
						{list}
					</ul>
					<p>{sumNumbers}</p>
				</div>
		);
	}
}

export default Task_h_7_3;
