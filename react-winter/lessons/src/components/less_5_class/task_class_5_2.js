import React, {Component} from 'react';

class Task_c_5_2 extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      lastSymbol: ''
    }
  }

  showLastSymbol = (e) => {
    const lastSymbol = String.fromCharCode(e.which);
    this.setState({
      lastSymbol
    })
  };
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
              onKeyDown={(e) => this.showLastSymbol(e)}
              onChange={(e) => this.updateInput(e)}
          />
          <p>Input value: {this.state.inputValue}</p>
          <p>Last symbol: {this.state.lastSymbol}</p>
        </div>
    );
  }
}

export default Task_c_5_2;
