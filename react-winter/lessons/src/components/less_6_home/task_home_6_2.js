import React, { Component } from 'react';

class Task_h_6_2 extends Component {
  constructor() {
    super();
    this.state = {
      gender: 'Мужчина',
    };
  }

  updateValue = e => {
    this.setState({
      gender: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <div>Ваш пол?</div>
        <div>
          <input
            id="one"
            type="radio"
            name="number"
            value="Мужчина"
            defaultChecked="checked"
            onChange={e => this.updateValue(e)}
          />
          <label htmlFor="one">Мужчина</label>
        </div>
        <div>
          <input
            id="two"
            type="radio"
            name="number"
            value="Женщина"
            onChange={e => this.updateValue(e)}
          />
          <label htmlFor="two">Женщина</label>
        </div>
        <p>
          {this.state.gender}
        </p>
      </div>
    );
  }
}

export default Task_h_6_2;
