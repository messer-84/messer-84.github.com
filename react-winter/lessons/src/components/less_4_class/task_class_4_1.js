import React, {Component} from 'react';

class Task_c_4_1 extends Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    }
  }

  render() {
    const list = this.state.names.map((item, i) => {
      return <li key={i}>{item}</li>
    });
    return (
        <div>
          <ul>
            {list}
          </ul>
        </div>
    );
  }
}

export default Task_c_4_1;
