import React, {Component} from 'react';

class Task_c_5_6 extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			year: null
		}
	}

	updateInput = (e) => {
		const inputValue = e.target.value;
		const date = new Date();
		const year = date.getFullYear() - inputValue;
		this.setState({
			inputValue,
			year
		})
	};

	render() {
		return (
				<div className="app">
					<p>Insert your age:</p>
					<input
							type="text"
							value={this.state.inputValue}
							onChange={(e) => this.updateInput(e)}
					/>
					<p>Age: {this.state.inputValue}</p>
					<p>Year birthday: {this.state.year}</p>

				</div>
		);
	}
}

export default Task_c_5_6;
