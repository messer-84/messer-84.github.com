import React, {Component} from 'react';

class Task_c_6_7 extends Component {
	constructor() {
		super();
		this.state = {
			options: ['red', 'green', 'blue', 'orange', 'white'],
			currentValue: 4
		}
	}

	updateValue = (e) => {
		this.setState({
			selectValue: e.target.value
		})
	};

	render() {
		const {currentValue, options} = this.state;
		const styles = {
			backgroundColor: options[currentValue]
		};
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
					<p style={styles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur deserunt dolorem error et exercitationem itaque nulla ratione reprehenderit temporibus!</p>
				</div>
		);
	}
}

export default Task_c_6_7;
