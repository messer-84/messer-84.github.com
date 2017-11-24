import React, {Component} from 'react';

class Task_c_5_5 extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: ''
		}
	}

	updateInput = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	};
	reverseValue(string){
		return string.split('').reverse().join('');
	};
	render() {
		return (
				<div className="app">
					<input
							type="text"
							value={this.state.inputValue}
							onChange={(e) => this.updateInput(e)}
					/>
					<p>Input value: {this.reverseValue(this.state.inputValue)}</p>
				</div>
		);
	}
}

export default Task_c_5_5;
