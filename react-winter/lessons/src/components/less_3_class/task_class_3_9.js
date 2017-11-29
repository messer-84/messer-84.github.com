import React, {Component} from 'react';

class Task_c_3_9 extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Коля", "Петя", "Вася", "Игорь", "Дима"],
      text: ''
    }
  }

  showList = () => {
    const list = this.state.names.map((item, i) => {
      return <li key={i}>{item}</li>;
    });

    this.setState({
      text: <ul>{list}</ul>
    })
  };

  render() {

    return (
        <div>
          {this.state.text}
          <button onClick={this.showList}>Показать список</button>
        </div>
    );
  }
}

export default Task_c_3_9;
