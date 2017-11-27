import React, {Component} from 'react';

/*
 *
Дан массив с работниками. У каждого работника есть имя,
 фамилия, зарплата. Выведите этих работников на экран в виде таблицы.
 Причем выведите только первых 10 работников, а над таблицей
 сделайте ссылки: 1, 2, 3, 4 и так далее. По нажатию на каждую
  ссылку в таблице будет отображаться заданный десяток работников.
   Ссылки над таблицей должны сгенерироваться автоматически исходя
    из количества работников.
 * */

class Task_h_7_11 extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500},
				{firstName: 'Petr', lastName: 'Petrov', salary: 1500},
				{firstName: 'Ivan', lastName: 'Ivanov', salary: 500},
				{firstName: 'Maria', lastName: 'Sidorova', salary: 2500},
				{firstName: 'Olga', lastName: 'Petrova', salary: 3500}
			],
		};
	}

	componentDidMount() {
		const countShowingUsers = 10;
		const currentPage = 1;
		const users = [...this.state.users];
		const countPages = Math.ceil(this.state.users.length / countShowingUsers);//4
		const usersWithId = users.map((item, index) => {
			item.id = index;
			return item;
		});
		const showUsers = usersWithId.filter((item, i) => {
			return currentPage * i < currentPage * countShowingUsers;
		});
		console.log(showUsers);

		this.setState({
			users: usersWithId,
			showUsers: showUsers,
			countPages: countPages,
			currentPage: currentPage,
			countShowingUsers: countShowingUsers
		});
	}

	updateValue = (e, field) => {
		this.setState({
			[field]: e.target.value
		})
	};

	handlePaginationClick(indexPage) {
		const {countShowingUsers} = this.state;
		const currentPage = indexPage;
		const showUsers = this.state.users.filter((item, index) => {
			return index > (indexPage - 1) * countShowingUsers
					&&
					index <= indexPage * countShowingUsers;
		});
		this.setState({
			showUsers,
			currentPage
		});


	}

	render() {

		const {
			users,
			currentPage,
			countPages,
			showUsers
		} = this.state;
		const pagesHtml = [];
		for (let i = 1; i <= countPages; i++) {
			let item = (
					<li key={i} className={i === currentPage ? 'active' : ''}>
						<a href="#" onClick={() => this.handlePaginationClick(i)}>{i}</a>
					</li>
			);
			pagesHtml.push(item)
		}

		const table = showUsers ? showUsers.map((item, index) => {
			const {firstName, lastName, salary, id} = item;

			return (
					<tr key={index}>
						<td>{id}</td>
						<td>{firstName}</td>
						<td>{lastName}</td>
						<td>{salary}</td>
					</tr>
			);
		}) : null;
		return (
				<div className="app">
					<ul className="pagination">
						{pagesHtml}
					</ul>
					<table>
						<thead>
						<tr>
							<th>Id</th>
							<th>First name</th>
							<th>Last name</th>
							<th>Salary</th>
						</tr>
						</thead>
						<tbody>
						{table}
						</tbody>
					</table>
				</div>
		);
	}
}

export default Task_h_7_11;
