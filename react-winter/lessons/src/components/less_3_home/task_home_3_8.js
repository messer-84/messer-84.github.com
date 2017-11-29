import React, {Component} from 'react';

class Task_h_3_8 extends Component {
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

  render() {
    const table = this.state.users.map((item, i) => {
      return <tr key={i}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.salary}</td>
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

export default Task_h_3_8;
