import React, {Component} from 'react';

class Task_h_5_6 extends Component {
	constructor() {
		super();
		this.state = {
			numbers: [11, 22, 33, 44, 55, 66, 77]
		}
	}

	removeNumber = (e) => {
		e.preventDefault();
		const numbers = [...this.state.numbers];
		const newNumbers = numbers.filter((item) => {
			return item !== parseInt(this.input.value);
		});

		this.input.value = '';

		this.setState({
			numbers: newNumbers
		});
	};

	render() {
		const list = this.state.numbers.map((item, i) => {
			return <li key={i}>{item}</li>
		});
		return (
				<div className="app">
					<ul>
						{list}
					</ul>
					<form
							action="#"
							onSubmit={this.removeNumber}
					>
						<input
								type="text"
								ref={el => this.input = el }
						/>
						<input type="submit" />
					</form>

				</div>
		);
	}
}

export default Task_h_5_6;
