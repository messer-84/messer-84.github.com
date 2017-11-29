import React, {Component} from 'react';

/*
 *
 *
 Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата.
 Выведите этих работников на экран в виде таблицы.
 Сделайте так, чтобы работников можно было посортировать по любой колонке этот таблицы.
 * */

class Task_h_7_7 extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {firstName: 'APetr', lastName: 'BPetrov', salary: 1500},
        {firstName: 'BIvan', lastName: 'DIvanov', salary: 500},
        {firstName: 'CVasya', lastName: 'CSidorov', salary: 2500},
        {firstName: 'DOleg', lastName: 'AOlegov', salary: 3500},
      ],
    };
  }

  componentDidMount() {
    this.setState({
      firstNameSorted: false,
      lastNameSorted: false,
      salarySorted: false
    });
  }

  sortColumn(field, sorted) {
    const isSorted = this.state[sorted];
    let direction = isSorted ? 1 : -1;
    const users = [...this.state.users];

    const sorting = (field) => {
      return (a, b) => {
        if (a[field] === b[field]) {
          return 0;
        }
        return a[field] > b[field] ? direction : direction * -1;
      };
    };
    users.sort(sorting(field));

    this.setState({
      users,
      [sorted]: !isSorted
    });
  }

  render() {
    console.log(this.state);

    const {users, firstNameSorted} = this.state;
    const table = users.map((item, index) => {
      const {firstName, lastName, salary} = item;

      return (
          <tr key={index}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{salary}</td>
          </tr>
      );
    });
    return (
        <div className="app">
          <table>
            <thead>
            <tr>
              <th onClick={() => this.sortColumn('firstName', 'firstNameSorted')}>First name</th>
              <th onClick={() => this.sortColumn('lastName', 'lastNameSorted')}>Last name</th>
              <th onClick={() => this.sortColumn('salary', 'salarySorted')}>Salary</th>
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

export default Task_h_7_7;
