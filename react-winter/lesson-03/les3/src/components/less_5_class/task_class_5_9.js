import React, {Component} from 'react';

class Task_c_5_9 extends Component {
	constructor() {
		super();
		this.state = {
			fullname: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const firstName = this.firstName.value;
		const lastName = this.lastName.value;
		const middleName = this.middleName.value;
		this.setState({
			fullName: firstName + ' ' + lastName + ' ' + middleName
		});
	};

	render() {
		return (
				<div className="app">
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<div>
							<input
									type="text"
									ref={el => this.firstName = el}
							/>
						</div>
						<div>
							<input
									type="text"
									ref={el => this.lastName = el}
							/>
						</div>
						<div>
							<input
									type="text"
									ref={el => this.middleName = el}
							/>
						</div>
						<input type="submit" />
					</form>
					<p>{this.state.fullName}</p>
				</div>
		);
	}
}

export default Task_c_5_9;
