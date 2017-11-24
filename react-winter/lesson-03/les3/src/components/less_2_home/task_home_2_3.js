import React, { Component } from 'react';

class Task_h_2_3 extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6],
      numbersSum: 0,
    };
  }

  setSum = () => {
    const numbersSum = this.state.numbers.reduce((a, b) => a + b);
    this.setState({
      numbersSum,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.setSum}>Set sum</button>
        <p>
          {this.state.numbersSum}
        </p>
      </div>
    );
  }
}

export default Task_h_2_3;
