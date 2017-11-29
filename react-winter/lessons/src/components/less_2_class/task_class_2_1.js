import React, {Component} from 'react';

class Task_c_2_1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Иван',
      age: 25
    }
  }

  render() {
    return (
        <div>
          имя: {this.state.name}, возраст: {this.state.age}
        </div>
    );
  }
}

export default Task_c_2_1;
