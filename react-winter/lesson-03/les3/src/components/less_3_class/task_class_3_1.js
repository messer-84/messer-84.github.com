import React, {Component} from 'react';

class Task_c_3_1 extends Component {
	constructor(){
		super();
		this.state = {
			show: true,
			name: 'Иван',
		}
	}
	render() {
		return (
				<div>
					<p>{ this.state.show ? 'Привет' : 'Пока'} {this.state.name}</p>
				</div>
		);
	}
}

export default Task_c_3_1;
