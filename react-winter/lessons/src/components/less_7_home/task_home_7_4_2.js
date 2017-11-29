import React, {Component} from 'react';

/*
 *
 Сделайте так, чтобы внутри каждой td была кнопка 'редактировать',
 по нажатию на которую текст этой td можно будет поредактировать
 с помощью появившегося в ней инпута.
 *
 * */

class Task_h_7_4_2 extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', age: 30},
        {name: 'Вася', age: 40},
        {name: 'Петя', age: 50},
      ]
    };
  }

  componentDidMount() {
    const finalUsers = this.state.users.map(elem => {
      elem.visibleInputName = false;
      elem.visibleInputAge = false;
      elem.btnName = 'visibleInputName';
      elem.btnAge = 'visibleInputAge';
      return elem;

    });
    this.setState({
      users: finalUsers
    });
  }


  updateValue = (e, index) => {
    const name = e.target.name;
    const users = [...this.state.users];
    users[index][name] = e.target.value;

    this.setState({users});
  };

  editVisibleField(btnValue, index) {
    const newValue = !this.state.users[index][btnValue];
    const users = this.state.users.map((item, elemIndex) => {
      if (index === elemIndex) {
        item[btnValue] = newValue;
      }
      return item;
    });

    this.setState({users})

  }


  render() {
    const {users} = this.state;

    const table = users ? users.map((item, index) => {
          const {name, age, visibleInputName, visibleInputAge} = item;
          return (
              <tr key={index}>
                <td>
                  {name}
                  <input
                      className={visibleInputName ? '' : 'hide'}
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => this.updateValue(e, index)}
                  />
                  <button
                      onClick={() => this.editVisibleField(item.btnName, index)}>Edit
                  </button>
                </td>
                <td>
                  {age}
                  <input
                      className={visibleInputAge ? '' : 'hide'}
                      type="text"
                      value={age}
                      name="age"
                      onChange={(e) => this.updateValue(e, index)}
                  />
                  <button onClick={() => this.editVisibleField(item.btnAge, index)}>Edit</button>
                </td>
              </tr>
          );
        }) : null;

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

export default Task_h_7_4_2;
