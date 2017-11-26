import React, {Component} from 'react';

/*
 *
 Дан массив с работниками. У каждого работника есть имя,
 фамилия, зарплата, пол. Выведите этих работников на экран
 в виде таблицы. Под таблице сделайте форму, с помощью которой
 в таблицу можно будет добавить нового работника.
 В этой форме имя, фамилия, зарплата будут инпутами, а пол - селектом,
 в котором можно будет выбрать один из двух вариантов.
 * */

class Task_h_7_10 extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500, gender: 'man'},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500, gender: 'man'},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500, gender: 'woman'},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500, gender: 'woman'},
			],
		};
	}

	componentDidMount() {
		this.setState({
			firstNameValue: '',
			lastNameValue: '',
			salaryValue: '',
			genderValue: 'man'
		});
	}

	updateValue = (e, field) => {
		this.setState({
			[field]: e.target.value
		})
	};

	addUser = (e) => {
		e.preventDefault();
		const {
				firstNameValue,
				lastNameValue,
				salaryValue,
				genderValue
		} = this.state;
		const users = [...this.state.users];

		const newUser = {
			firstName: firstNameValue,
			lastName: lastNameValue,
			salary: parseInt(salaryValue),
			gender: genderValue
		};


		users.push(newUser);
		this.setState({
			users,
			firstNameValue: '',
			lastNameValue: '',
			salaryValue: '',
			genderValue: 'man'
		});

	};


	render() {
		const {
				users,
				firstNameValue = '',
				lastNameValue = '',
				salaryValue = '',
				genderValue
		} = this.state;
		const table = users.map((item, index) => {
			const {firstName, lastName, salary, gender} = item;

			return (
					<tr key={index}>
						<td>{firstName}</td>
						<td>{lastName}</td>
						<td>{salary}</td>
						<td>{gender}</td>
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
							<th>Gender</th>
						</tr>
						</thead>
						<tbody>
						{table}
						</tbody>
					</table>
					<h2>Добавить сотрудника</h2>
					<form action="#" onSubmit={e => this.addUser(e)}>
						<div>
							<label htmlFor="">Имя:</label>
							<input
									type="text"
									value={firstNameValue}
									onChange={e => this.updateValue(e, 'firstNameValue')}
							/>
						</div>
						<div>
							<label htmlFor="">Фамилия:</label>
							<input
									type="text"
									value={lastNameValue}
									onChange={e => this.updateValue(e, 'lastNameValue')}
							/>
						</div>
						<div>
							<label htmlFor="">Зарплата:</label>
							<input
									type="text"
									value={salaryValue}
									onChange={e => this.updateValue(e, 'salaryValue')}
							/>
						</div>
						<div>
							<select value={genderValue} onChange={e => this.updateValue(e, 'genderValue')}>
								<option value='man'>man</option>
								<option value='woman'>woman</option>
							</select>
						</div>
						<input type="submit" value="Submit" />
					</form>
				</div>
		);
	}
}

export default Task_h_7_10;
