import React, {Component} from 'react';

class Task_c_2_3 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Иван',
      age: 25
    }

  }

  showMessage = (e) => {
    alert(this.state.name);
  };

  render() {
    return (
        <div>
          <button onClick={this.showMessage}>Show message</button>
        </div>
    );
  }
}

export default Task_c_2_3;
