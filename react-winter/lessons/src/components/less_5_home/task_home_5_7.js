import React, {Component} from 'react';

class Task_h_5_7 extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', age: 30},
        {name: 'Вася', age: 40},
        {name: 'Петя', age: 50}
      ]
    };
  }

  addRow(e) {
    e.preventDefault();
    const users = [...this.state.users];
    users.push({
      name: this.name.value,
      age: this.age.value
    });
    this.setState({
      users
    });
    this.name.value = '';
    this.age.value = '';

  }

  render() {
    const table = this.state.users.map((item, i) => {
      return <tr key={i}>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>;
    });

    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
            </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
          <form
              action="#"
              onSubmit={e => this.addRow(e)}
          >
            <input
                type="text"
                ref={el => this.name = el }
            />
            <input
                type="text"
                ref={el => this.age = el }
            />
            <input type="submit" />
          </form>
        </div>
    );
  }

}

export default Task_h_5_7;
