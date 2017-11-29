import React, {Component} from 'react';

class Task_h_5_1 extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  updateInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  render() {
    return (
        <div className="app">
          <input
              type="text"
              value={this.state.inputValue}
              onChange={(e) => this.updateInput(e)}
          />
          <p>Квадратный корень: {Math.sqrt(this.state.inputValue)}</p>
        </div>
    );
  }
}

export default Task_h_5_1;
