import React, {Component} from 'react';

class Task_c_4_3 extends Component {
	constructor() {
		super();
		this.state = {
			names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
		}
	}

	addElement = () => {
		let names = [...this.state.names];
		names.push('пункт');
		this.setState({
			names
		});
	};
	removeElement = () => {
		let names = [...this.state.names];
		names.pop();
		this.setState({
			names
		});
	};

	render() {
		const list = this.state.names.map((item, i) => {
			return <li key={i}>{item}</li>
		});

		return (
				<div>
					<ul>
						{list}
					</ul>
					<button onClick={this.addElement}>Add element</button>
					<br />
					<button onClick={this.removeElement}>Remove element</button>

				</div>
		);
	}
}

export default Task_c_4_3;
