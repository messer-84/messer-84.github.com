import React, {Component} from 'react';


/*
 *
 *
 *
 *
 * */

class Task_c_9_5 extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Vasya'},
				{name: 'Vasya-2'},
				{name: 'Vasya-3'},
				{name: 'Vasya-4'},
				{name: 'Vasya-5'},
				{name: 'Vasya-6'},
			]
		};
	}

	componentDidMount() {
		const users = [...this.state.users];
		const newUsers = users.map(item => {
			item.isShowField = false;
		});
		this.setState({newUsers});
	}

	updateValue = (e, index) => {
		const users = [...this.state.users];
		users[index].name = e.target.value;

		this.setState({users});
	};

	handleInputClick = (e) =>{
		e.stopPropagation();
	};

	toggleShowField = (index) => {
		const users = [...this.state.users];
		users[index].isShowField = !this.state.users[index].isShowField;

		this.setState({users});
	};

	render() {

		const userList = [...this.state.users].map((item, index) => {
			return (
					<li key={index} onClick={() => this.toggleShowField(index)}>
						{!item.isShowField && <span>Name: {item.name}</span> }
						{item.isShowField &&
						<input onClick={(e)=>this.handleInputClick(e)}
								type="text"
								value={item.name}
								onChange={e => this.updateValue(e, index)}
								onBlur={() => this.toggleShowField(index)}
						/>}
					</li>
			);
		});
		return (
				<div className="app">
					<ul>
						{userList}
					</ul>
					<p>
					</p>
				</div>
		);
	}
}

export default Task_c_9_5;
