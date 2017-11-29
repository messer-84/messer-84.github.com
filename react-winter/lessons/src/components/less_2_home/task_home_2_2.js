import React, {Component} from 'react';

class Task_h_2_2 extends Component {
	constructor(){
		super();
		this.state = {
			text: 'Пока',
		}
	}
	changeText = () =>{
		this.setState({
			text: 'Привет'
		});
	};
	render() {
		return (
				<div>
					<button onClick={this.changeText}>Change text</button>
					<p>{this.state.text}</p>
				</div>
		);
	}
}

export default Task_h_2_2;
