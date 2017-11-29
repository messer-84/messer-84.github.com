import React, {Component} from 'react';

class Task_c_4_4 extends Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
    };
  }

  addElement = () => {
    let names = [...this.state.names];
    names.push('пункт');

    this.setState({
      names,
    });
  };
  removeElement = i => {
    let names = [...this.state.names];
    names.splice(i, 1);
    this.setState({
      names,
    });
  };

  render() {
    const list = this.state.names.map((item, index) => {
      return (
          <li key={index}>
            {item}
            <button onClick={() => this.removeElement(index)}>Remove</button>
          </li>
      );
    });

    return (
        <div>
          <ul>
            {list}
          </ul>
          <button onClick={this.addElement}>Add element</button>
        </div>
    );
  }
}

export default Task_c_4_4;
