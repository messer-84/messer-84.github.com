import React, {Component} from 'react';

class Task_c_3_5 extends Component {
	constructor(){
		super();
		this.state = {
			show: true,
			name: 'Иван',
			age: 25
		}
	}
	changeData = () =>{
		this.setState({
			show: !this.state.show
		});
	};
	render() {
		if(!this.state.show){
			var message = <p>имя: {this.state.name}, возраст: {this.state.age}</p>
		}
		return (
				<div>
					{message}
					<button onClick={this.changeData}>{this.state.show ? 'Показать' : 'Скрыть'}</button>
				</div>
		);
	}
}

export default Task_c_3_5;
