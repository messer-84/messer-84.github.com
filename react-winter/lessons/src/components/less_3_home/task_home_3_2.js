import React, {Component} from 'react';

class Task_h_3_2 extends Component {
	constructor() {
		super();
		this.state = {
			isRed: true,
		}
	}

	render() {
		const style = {
			"color": this.state.isRed ? 'red' : 'green'
		};
		return (
				<div>
					<p style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
				</div>
		);
	}
}

export default Task_h_3_2;
