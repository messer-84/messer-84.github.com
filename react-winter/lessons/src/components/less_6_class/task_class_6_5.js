import React, {Component} from 'react';

class Task_c_6_5 extends Component {
  constructor() {
    super();
    this.state = {
      option: 'one',
    };
  }

  updateValue = e => {
    this.setState({
      option: e.target.value,
    });
  };

  render() {
    return (
        <div className="app">
          <input
              type="radio"
              checked={this.state.option === 'one'}
              name="number"
              value="one"
              onChange={e => this.updateValue(e)}
          />
          <input
              type="radio"
              checked={this.state.option === 'two'}
              name="number"
              value="two"
              onChange={e => this.updateValue(e)}
          />
          <input
              type="radio"
              checked={this.state.option === 'three'}
              name="number"
              value="three"
              onChange={e => this.updateValue(e)}
          />

          <p>
            {this.state.option}
          </p>
        </div>
    );
  }
}

export default Task_c_6_5;
