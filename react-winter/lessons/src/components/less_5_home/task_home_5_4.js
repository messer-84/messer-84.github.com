import React, {Component} from 'react';

class Task_h_5_4 extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			userDataArray: []
		}
	}

	updateInput = (e) => {
		const value = e.target.value;
		this.setState({
			inputValue: value,
			userDataArray: value.split(' '),
		});
	};

	render() {
		const {userDataArray} = this.state;
		return (
				<div className="app">
					<input
							type="text"
							value={this.state.inputValue}
							onChange={(e) => this.updateInput(e)}
					/>
					<div>
						<p>Фамилия: {userDataArray[0]}</p>
						<p>Имя: {userDataArray[1]}</p>
						<p>Отчество: {userDataArray[2]}</p>
					</div>
				</div>
		);
	}
}

export default Task_h_5_4;
