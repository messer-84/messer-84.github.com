import React, {Component} from 'react';

class Task_h_3_6 extends Component {
	constructor() {
		super();
		this.state = {
			colors: ['red', 'blue', 'green', 'yellow', 'purple'],
			actualIndex: 0
		}
	}

	changeColor = () => {
		const {actualIndex, colors} = this.state;
		const condition = actualIndex < colors.length - 1;
		const newColor =  condition ? actualIndex + 1 : 0;

		this.setState({
			actualIndex: newColor
		})

	};

	render() {

		const style = {
			"color": this.state.colors[this.state.actualIndex],
			"textShadow": "1px 1px #000"
		};
		const {actualIndex, colors} = this.state;
		const index = actualIndex < colors.length-1 ? actualIndex + 1 : 0;
		
		return (
				<div>
					<button onClick={this.changeColor}>{colors[index]}</button>
					<p style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
				</div>
		);
	}
}

export default Task_h_3_6;
