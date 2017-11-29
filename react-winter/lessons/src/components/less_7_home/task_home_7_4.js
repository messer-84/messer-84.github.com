import React, {Component} from 'react';

/*
 *
 Сделайте так, чтобы внутри каждой td была кнопка 'редактировать',
 по нажатию на которую текст этой td можно будет поредактировать
 с помощью появившегося в ней инпута.
 *
 * */

class Task_h_7_4 extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', age: 30, visibleInputName: false, visibleInputAge: false},
        {name: 'Вася', age: 40, visibleInputName: false, visibleInputAge: false},
        {name: 'Петя', age: 50, visibleInputName: false, visibleInputAge: false},
      ]
    };
  }


  updateValue = (e, index) => {
    console.log(e.target.name);
    const name = e.target.name;
    const users = [...this.state.users];
    users[index][name] = e.target.value;

    this.setState({
      users
    });
  };

  editAge(index) {
    const users = [...this.state.users];
    users[index].visibleInputAge = !users[index].visibleInputAge;

    this.setState({
      users
    })
  }

  editName(index) {
    const users = [...this.state.users];
    users[index].visibleInputName = !users[index].visibleInputName;

    this.setState({
      users
    })
  }


  render() {
    const {users} = this.state;

    const table = users.map((item, index) => {
      const {name, age, visibleInputName, visibleInputAge} = item;
      return (
          <tr key={index}>
            <td>
              {name}
              <input
                  className={visibleInputName ? '' : 'hide' }
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => this.updateValue(e, index)}
              />
              <button onClick={(e) => this.editName(index)}>Edit</button>
            </td>
            <td>
              {age}
              <input
                  className={visibleInputAge ? '' : 'hide' }
                  type="text"
                  value={age}
                  name="age"
                  onChange={(e) => this.updateValue(e, index)}
              />
              <button onClick={(e) => this.editAge(index)}>Edit</button>
            </td>
          </tr>
      );
    });
    return (
        <div className="app">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
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

export default Task_h_7_4;
