import React, { Component } from 'react';

class Task_h_6_5 extends Component {
  constructor() {
    super();
    this.state = {
      options: ['one', 'two', 'three'],
      selectValue: 0,
      inputValue: '',
    };
  }

  addOption = e => {
    e.preventDefault();
    const options = [...this.state.options];
    options.push(this.input.value);
		this.input.value = '';
    this.setState({
      options,
    });
  };

  render() {
    const { selectValue, options, inputValue } = this.state;
    const optionsList = options.map((item, i) => {
      return (
        <option value={i} key={i}>
          {item}
        </option>
      );
    });

    return (
      <div className="app">
        <form action="#" onSubmit={e => this.addOption(e)}>
          <select>
            {optionsList}
          </select>
          <input
            type="text"
            ref={el => (this.input = el)}
          />
          <button>Отправить</button>
        </form>
      </div>
    );
  }
}

export default Task_h_6_5;
