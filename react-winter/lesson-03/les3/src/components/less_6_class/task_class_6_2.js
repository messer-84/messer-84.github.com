import React, {Component} from 'react';

class Task_c_6_2 extends Component {
	constructor() {
		super();
		this.state = {
			checked: false
		}
	}
	updateValue = () =>{
		this.setState({
			checked: !this.state.checked
		})

	};
	render() {
		return (
				<div className="app">
					<input type="checkbox"
							checked={this.state.checked}
							onChange={this.updateValue}
					/>
					<p>{this.state.checked ? 'checked' : 'unchecked'}</p>
				</div>
		);
	}
}

export default Task_c_6_2;
