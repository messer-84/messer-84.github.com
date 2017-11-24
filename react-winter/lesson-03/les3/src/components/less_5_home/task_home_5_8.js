import React, {Component} from 'react';

class Task_h_5_8 extends Component {
	constructor() {
		super();
		this.state = {
			numbers: []
		}
	}

	createList = (e) => {
		e.preventDefault();
		const newString = this.input.value;

		if(newString.length > 0){
			var numbers = newString.split('').map(item => item);
		}
		this.input.value = '';
		this.setState({
			numbers
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
							onSubmit={e => this.createList(e)}
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

export default Task_h_5_8;
