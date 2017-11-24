import React, {Component} from 'react';

class Task_c_6_6 extends Component {
	constructor() {
		super();
		this.state = {
			checkOne: true,
			checkTwo: false,
			checkThree: false
		}
	}

	updateValue = (e) => {
		const name = e.target.name;
		this.setState({
			[name]: !this.state[name]
		})

	};

	render() {
		return (
				<div className="app">
					<input type="checkbox" name="checkOne"
							checked={this.state.checkOne}
							onChange={e=>this.updateValue(e)}
					/>
					<input type="checkbox" name="checkTwo"
							checked={this.state.checkTwo}
							onChange={e => this.updateValue(e)}
					/>
					<input type="checkbox" name="checkThree"
							checked={this.state.checkThree}
							onChange={e=>this.updateValue(e)}
					/>
					<p>{this.state.checkOne ? 'checked' : 'unchecked'}</p>
					<p>{this.state.checkTwo ? 'checked' : 'unchecked'}</p>
					<p>{this.state.checkThree ? 'checked' : 'unchecked'}</p>

				</div>
		);
	}
}

export default Task_c_6_6;
