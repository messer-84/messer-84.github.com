import React, {Component} from 'react';

class Task_c_2_2 extends Component {
	constructor(){
		super();
	}
	showMessage =(e)=>{
		alert('hello');
	};
	render() {
		return (
				<div>
					<button onClick={this.showMessage}>Show message</button>
				</div>
		);
	}
}

export default Task_c_2_2;
