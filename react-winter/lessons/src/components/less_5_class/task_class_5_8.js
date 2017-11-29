import React, {Component} from 'react';

class Task_c_5_8 extends Component {
	constructor() {
		super();
		this.state = {
			sum: null
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const numOne = +this.numberOne.value;
		const numTwo = +this.numberTwo.value;

		this.setState({
			sum: numOne + numTwo
		});
	};

	render() {
		return (
				<div className="app">
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<input
								type="text"
								ref={el => this.numberOne = el}
						/>
						<input
								type="text"
								ref={el => this.numberTwo = el}
						/>

						<input type="submit" />
					</form>
					<p>{this.state.sum}</p>
				</div>
		);
	}
}

export default Task_c_5_8;
