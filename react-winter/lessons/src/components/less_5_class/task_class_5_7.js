import React, {Component} from 'react';

class Task_c_5_7 extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      resultValue: ''
    }
  }

  updateInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      resultValue: this.state.inputValue
    });
  };

  render() {
    return (
        <div className="app">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
                type="text"
                value={this.state.inputValue}
                onChange={(e) => this.updateInput(e)}
            />
            <input type="submit" />
          </form>
          <p>{this.state.resultValue}</p>
        </div>
    );
  }
}

export default Task_c_5_7;
