import React, {Component} from 'react';

class Task_h_5_3 extends Component {
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

	showSymbols(value) {
		if (value.length > 2) {
			return value.slice(-3);
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
					<p>{this.showSymbols(this.state.inputValue)}</p>
				</div>
		);
	}
}

export default Task_h_5_3;
