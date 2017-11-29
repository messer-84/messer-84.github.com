import React, {Component} from 'react';

class Task_h_4_1 extends Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    }
  }

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
          <button onClick={this.addElement}>Add element</button>

        </div>
    );
  }
}

export default Task_h_4_1;
