import React, {Component} from 'react';

/*
 *
 * Дан массив с юзерами:
 Выведите элементы этого массива в виде списка ul. Имя,
 фамилия и возраст каждого юзера должны стоять в одной li через пробел.
 Внутри каждой li сделайте
 чекбокс. Если чекбокс не отмечен, то в li должно быть только имя юзера, а если отмечен - имя, фамилия и возраст.
 *
 * */

class Task_h_7_2 extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов', age: 30, checked: true},
				{name: 'Вася', surname: 'Петров', age: 40, checked: true},
				{name: 'Петя', surname: 'Сидоров', age: 50, checked: true},
			]
		};
	}

	updateValue = (index) => {
		const users = [...this.state.users];
		users[index].checked = !users[index].checked;

		this.setState({
			users
		});


	};

	render() {
		const {users} = this.state;
		const list = users.map((item, index) => {
			const {name, surname, age, checked} = item;
			const data = checked ? `${surname} ${age}` : '';
			return (
					<li key={index}>
						{name} {data}
						<input
								type="checkbox"
								checked={checked}
								onChange={() => this.updateValue(index)}
						/>
					</li>
			);
		});
		return (
				<div className="app">
					<ul>
						{list}
					</ul>
				</div>
		);
	}
}

export default Task_h_7_2;
