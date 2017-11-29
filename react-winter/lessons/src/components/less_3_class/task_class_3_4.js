import React, {Component} from 'react';

class Task_c_3_4 extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      name: 'Иван',
      age: 25
    }
  }

  changeData = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    if (this.state.show) {
      var message = <p>имя: {this.state.name}, возраст: {this.state.age}</p>
    }
    return (
        <div>
          {message}
          <button onClick={this.changeData}>Нажми на меня</button>
        </div>
    );
  }
}

export default Task_c_3_4;
