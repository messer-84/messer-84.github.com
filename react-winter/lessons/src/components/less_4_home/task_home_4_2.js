import React, {Component} from 'react';

class Task_h_4_2 extends Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    }
  }

  removeElement = () => {
    let names = [...this.state.names];
    names.shift();
    this.setState({
      names
    });
  };

  addElement = () => {
    let names = [...this.state.names];
    names.unshift('!!!');
    this.setState({
      names
    });
  };

  render() {
    const list = this.state.names.map((item, i) => {
      return <li key={i}>{item}</li>
    });

    return (
        <div>
          <ul>
            {list}
          </ul>
          <button onClick={this.addElement}>Add first element</button>
          <button onClick={this.removeElement}>Remove first element</button>

        </div>
    );
  }
}

export default Task_h_4_2;
