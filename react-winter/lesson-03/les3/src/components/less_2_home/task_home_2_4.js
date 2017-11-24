import React, { Component } from 'react';

class Task_h_2_4 extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6],
      numbersSum: 0,
    };
  }

  componentDidMount() {
    this.setSum(this.state.numbers);
  }

  setSum = array => {
    const numbersSum = array.reduce((a, b) => a + b);
    this.setState({
      numbersSum,
    });
  };

  setOddSum = () => {
    const oddSum = this.state.numbers.filter(item => item % 2 === 0);
    this.setSum(oddSum);
  };

  setEvenSum = () => {
    const evenSum = this.state.numbers.filter(item => item % 2 !== 0);
    this.setSum(evenSum);
  };

  render() {
    return (
      <div>
        <button onClick={this.setOddSum}>Set odd sum</button>
        <button onClick={this.setEvenSum}>Set even sum</button>
        <p>
          {this.state.numbersSum}
        </p>
      </div>
    );
  }
}

export default Task_h_2_4;
