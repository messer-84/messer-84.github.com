import React, {Component} from 'react';

class Task_h_4_4 extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', age: 30, salary: 500},
        {name: 'Вася', age: 31, salary: 600},
        {name: 'Петя', age: 32, salary: 700}
      ]
    };
  }

  removeUser = (index) => {
    let users = [...this.state.users];
    users.splice(index, 1);

    this.setState({
      users,
    });
  };


  render() {
    const table = this.state.users.map((item, index) => {
      return <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.salary}</td>
        <td>
          <button onClick={() => this.removeUser(index)}>Remove</button>
        </td>
      </tr>;
    });

    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
            </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
    );
  }

}

export default Task_h_4_4;
