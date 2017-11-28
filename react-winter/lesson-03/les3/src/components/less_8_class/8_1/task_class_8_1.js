import React, {Component} from 'react';

import User from './User'
/*
 *
 *
 *  Дан массив с работниками. У каждого работника есть имя, фамилия и зарплата. Выведите этих работников на экран в виде таблицы.
 *  Для каждого работника сделайте чекбокс, который изначально будет отмечен.
 *  Под таблицей выведите сумму зарплат тех работников, для которых чекбокс отмечен.
 *
 * */

class Task_c_8_1 extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{firstName: 'Petr', lastName: 'Petrov', age: 25},
				{firstName: 'Ivan', lastName: 'Ivanov', age: 50},
				{firstName: 'Vasya', lastName: 'Sidorov', age: 40},
				{firstName: 'Oleg', lastName: 'Olegov', age: 20},
			],
		};
	}


	render() {
		const {users} = this.state;
		const usersList = users.map((item,index)=>{
			return <User name={item.firstName} lastName={item.lastName} age={item.age}/>
		});
		return (
				<div className="app">
					{usersList}
				</div>
		);
	}
}

export default Task_c_8_1;
