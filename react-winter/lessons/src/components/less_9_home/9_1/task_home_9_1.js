import React, {Component} from 'react';

import User from './User'

/*
 *
 *
 *
 * */

class Task_h_9_1 extends Component {
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

    componentDidMount() {
        const users = [...this.state.users];
        const newUsers = users.map((item) => {
            item.isShowField = false;
            item.inputValue = item.firstName;
            return item;
        });
        this.setState({users: newUsers})

    }

    updateName = (e, index) => {
        const users = [...this.state.users];
        users[index].inputValue = e.target.value;
        this.setState({
            users
        });
    };

    showField = (index) => {
        const users = [...this.state.users];
        users[index].isShowField = !this.state.users[index].isShowField;
        users[index].firstName = this.state.users[index].inputValue;
        this.setState({
            users
        });
    };


    render() {
        const usersList = this.state.users.map((item, index) => {
            return <User
                key={index}
                item={item}
                id={index}
                updateName={this.updateName}
                showField={this.showField}
            />
        });
        return (
            <div className="app">
                {usersList}
            </div>
        );
    }
}

export default Task_h_9_1;
