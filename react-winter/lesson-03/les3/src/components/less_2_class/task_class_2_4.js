import React, {Component} from 'react';

class Task_c_2_4 extends Component {
	constructor(){
		super();
		this.state = {
			name: 'Иван',
			age: 25
		}

	}
	changeData =(e)=>{
		this.setState({
			name:'Коля',
			age: 30
		})
	};
	render() {
		return (
				<div>
					<div>имя: {this.state.name}, возраст: {this.state.age}</div>
					<button onClick={this.changeData}>Change data</button>
				</div>
		);
	}
}

export default Task_c_2_4;
