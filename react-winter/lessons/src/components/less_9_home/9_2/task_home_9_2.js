import React, {Component} from 'react';

import User from './User'

/*
 *
 *
 *
 * */

class Task_h_9_2 extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {firstName: 'Petr', lastName: 'Petrov', hours: 100, rate: 5},
                {firstName: 'Ivan', lastName: 'Ivanov', hours: 120, rate: 7.5},
                {firstName: 'Vasya', lastName: 'Sidorov', hours: 140, rate: 10},
                {firstName: 'Oleg', lastName: 'Olegov', hours: 160, rate: 12.5},
            ],
        };
    }

    componentDidMount() {
        const users = [...this.state.users];
        var sumTotal = 0;
        const newUser = users.map(item => {
            item.sum = item.hours * item.rate;
            sumTotal += item.sum;
            return item;
        });
        // users.forEach(item => {
        //     sumTotal += item.hours * item.rate
        // });
        this.setState({
            users: newUser,
            sumTotal
        });

    }

    updateField = (e, index, type) => {
        const users = [...this.state.users];
        users[index][type] = e.target.value;
        users[index].sum = users[index].rate*users[index].hours;

        var sumTotal = 0;
        users.forEach(item => {
            sumTotal += item.sum
        });
        this.setState({
            users,
            sumTotal
        });
    };


    render() {
        const usersTable = this.state.users.map((item, index) => {
            return <User
                key={index}
                item={item}
                id={index}
                updateField={this.updateField}
            />
        });
        return (
            <div className="app">
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отработано часов</th>
                        <th>Ставка час</th>
                        <th>Зарплата</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usersTable}
                    </tbody>
                </table>
                <div>{this.state.sumTotal}</div>
            </div>
        );
    }
}

export default Task_h_9_2;
