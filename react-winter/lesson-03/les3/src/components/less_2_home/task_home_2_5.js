import React, { Component } from 'react';

class Task_h_2_5 extends Component {
  constructor() {
    super();
    this.state = {
      number: 2,
    };
  }

  setSquare = () => {
    const numbersSquare = this.state.number * this.state.number;
    this.setState({
      number: numbersSquare
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.setSquare}>Set number Square</button>
        <p>
          {this.state.number}
        </p>
      </div>
    );
  }
}

export default Task_h_2_5;
