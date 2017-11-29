import React, {Component} from 'react';

/*
 *
 *
 *  Дан массив с работниками. У каждого работника есть имя, фамилия и зарплата. Выведите этих работников на экран в виде таблицы.
 *  Для каждого работника сделайте чекбокс, который изначально будет отмечен.
 *  Под таблицей выведите сумму зарплат тех работников, для которых чекбокс отмечен.
 *
 * */

class Task_h_7_1 extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{firstName: 'Petr', lastName: 'Petrov', salary: 500, checked: true},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 1500, checked: true},
				{firstName: 'Vasya', lastName: 'Sidorov', salary: 2500, checked: true},
				{firstName: 'Oleg', lastName: 'Olegov', salary: 3500, checked: true},
			],
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
		let sum = 0;
		const table = users.map((item, index) => {
			const {firstName, lastName, salary, checked} = item;
			sum = checked ? sum + salary : sum;
			return (
					<tr key={index}>
						<td>{firstName}</td>
						<td>{lastName}</td>
						<td>{salary}</td>
						<td>
							<input
									type="checkbox"
									checked={checked}
									onChange={() => this.updateValue(index)}
							/>
						</td>

					</tr>
			);
		});
		return (
				<div className="app">
					<table>
						<thead>
						<tr>
							<th>First name</th>
							<th>Last name</th>
							<th>Salary</th>
							<th>Check</th>
						</tr>
						</thead>
						<tbody>
						{table}
						</tbody>
					</table>
					<p>Sum checked salaries: {sum}</p>
				</div>
		);
	}
}

export default Task_h_7_1;
