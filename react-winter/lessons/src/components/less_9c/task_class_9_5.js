import React, {Component} from 'react';


/*
 *
 *
 *
 *
 * */

class Task_c_9_4 extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				name: 'Vasya',
				nameValue: 'Vasya',
				isShowField: false
			}
		};
	}

	updateValue = (e) => {

		const user = {...this.state.user, nameValue: e.target.value};

		this.setState({user});

	};

	toggleShowField = () => {
		const user = {
			...this.state.user,
			isShowField: !this.state.user.isShowField
		};

		this.setState({user});

	};

	editName = () => {

		const user = {
			...this.state.user,
			name: this.state.user.nameValue,
			isShowField: !this.state.user.isShowField
		};
		this.setState({user});
	};

	render() {
		// console.log({...this.state.user});

		const {name, nameValue, isShowField} = this.state.user;
		return (
				<div className="app">
					{!isShowField && <p onClick={() => this.toggleShowField()}>{name}</p>}
					<p>
						{isShowField &&
						<input
								type="text"
								value={nameValue}
								onChange={e => this.updateValue(e)}
								onBlur={this.editName}
						/>}
					</p>
				</div>
		);
	}
}

export default Task_c_9_4;
