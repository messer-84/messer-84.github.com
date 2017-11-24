import React, {Component} from 'react';

class Task_h_5_2 extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: ''
		}
	}

	updateInput = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	};

	showSum(value) {
		if (value) {
			const numArray = value.split('');
			return numArray.reduce((a, b) => {
				return parseInt(a) + parseInt(b);
			});

		}
	}

	render() {


		return (
				<div className="app">
					<input
							type="text"
							value={this.state.inputValue}
							onChange={(e) => this.updateInput(e)}
					/>
					<p>{this.showSum(this.state.inputValue)}</p>
				</div>
		);
	}
}

export default Task_h_5_2;
