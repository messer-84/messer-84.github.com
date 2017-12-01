import React, {Component} from 'react';


/*
 *
 *  Дан массив. Выведите элементы этого массива в виде списка ul.
 *  Сделайте так, чтобы внутри каждой li был чекбокс, по нажатию
 *  на который содержимое li будет перечеркиваться.
 *
 *
 *
 * */

class Task_c_9_1 extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				name: 'Vasya'
			}
		};
	}

	updateUserName = e => {

		this.setState({
			user:{
				name: e.target.value
			}
		})

	};

	render() {
		const {user} = this.state;


		return (
				<div className="app">
					<p>{user.name}</p>
					<input type="text" onChange={(e)=>{this.updateUserName(e)}} />
				</div>
		);
	}
}

export default Task_c_9_1;
