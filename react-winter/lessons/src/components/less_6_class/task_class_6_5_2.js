import React, { Component } from 'react';

class Task_c_6_5_2 extends Component {
  constructor() {
    super();
    this.state = {
      number: '1',
    };
  }

  updateValue = e => {
    this.setState({
      number: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <div>
          <input
            id="one"
            type="radio"
            name="number"
            value="1"
            defaultChecked="checked"
            onChange={e => this.updateValue(e)}
          />
          <label htmlFor="one">One</label>
        </div>
        <div>
          <input
            id="two"
            type="radio"
            name="number"
            value="2"
            onChange={e => this.updateValue(e)}
          />
          <label htmlFor="two">Two</label>
        </div>
        <div>
          <input
            id="three"
            type="radio"
            name="number"
            value="3"
            onChange={e => this.updateValue(e)}
          />
          <label htmlFor="three">Three</label>
        </div>

        <p>
          {this.state.number}
        </p>
      </div>
    );
  }
}

export default Task_c_6_5_2;
