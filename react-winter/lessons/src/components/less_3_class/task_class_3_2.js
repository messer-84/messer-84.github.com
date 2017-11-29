import React, {Component} from 'react';

class Task_c_3_2 extends Component {
	constructor(){
		super();
		this.state = {
			show: true,
			name: 'Иван',
		}
	}
	changeText = () =>{
		this.setState({
			show: false
		});
	};
	render() {
		return (
				<div>
					<button onClick={this.changeText}>Change text</button>
					<p>{ this.state.show ? 'Привет' : 'Пока'} {this.state.name}</p>
				</div>
		);
	}
}

export default Task_c_3_2;
