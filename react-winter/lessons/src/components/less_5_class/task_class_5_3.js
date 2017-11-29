import React, {Component} from 'react';

class Task_c_5_3 extends Component {
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
          <p>Input value: {this.state.inputValue.toUpperCase()}</p>
        </div>
    );
  }
}

export default Task_c_5_3;
