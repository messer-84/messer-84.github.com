import React, {Component} from 'react';

class Task_h_2_1 extends Component {
	constructor(){
		super();
		this.state = {
			name: 'Иван',
			age: 25
		}
	}
	sayHello = () =>{
		alert('Привет');
	};
	sayBye = () =>{
		alert('Пока');
	};
	render() {
		return (
				<div>
					<button onClick={this.sayBye}>Пока</button>
					<button onClick={this.sayHello}>Привет</button>
				</div>
		);
	}
}

export default Task_h_2_1;
