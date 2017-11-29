import React, {Component} from 'react';

class Task_c_6_4 extends Component {
	constructor() {
		super();
		this.state = {
			options: ['city-1', 'city-2', 'city-3', 'city-4', 'city-5'],
			currentValue: 0
		}
	}

	updateValue = (e) => {
		this.setState({
			selectValue: e.target.value
		})
	};

	render() {
		const {currentValue, options} = this.state;
		const optionsList = options.map((item, i) => {
			return <option value={i} key={i}>{item}</option>
		});
		return (
				<div className="app">
					<select
							onChange={ (e) => this.updateValue(e) }
							value={currentValue}
					>
						{optionsList}
					</select>
					<p>{options[currentValue]}</p>
				</div>
		);
	}
}

export default Task_c_6_4;
