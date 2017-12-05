import React, {Component} from 'react';

import User from './User'

/*
 *
 *
 *
 * */

class Task_c_9_7 extends Component {
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

    addSign = (index) => {
        const users = [...this.state.users];
        users[index].firstName = this.state.users[index].firstName + '!';
        this.setState({
            users
        });
    };

    updateName = (e, index) => {
        const users = [...this.state.users];
        users[index].firstName = e.target.value;
        this.setState({
            users
        });
    };


    render() {
        const {users} = this.state;
        const usersList = users.map((item, index) => {
            return <User key={index} item={item} id={index} updateName={this.updateName} editName={this.addSign}/>
        });
        return (
            <div className="app">
                {usersList}
            </div>
        );
    }
}

export default Task_c_9_7;
