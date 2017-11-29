import React, {Component} from 'react';

class Task_h_6_4 extends Component {
  constructor() {
    super();
    this.state = {
      texts: [
        'First - Lorem ipsum dolor sit amet',
        'Second - Lorem ipsum dolor sit amet',
        'Three - Lorem ipsum dolor sit amet'
      ],
      options: ['one', 'two', 'three'],
      currentValue: 0
    }
  }

  updateValue = (e) => {
    this.setState({
      selectValue: parseInt(e.target.value)
    })
  };

  render() {

    const {currentValue, texts, options} = this.state;
    const optionsList = options.map((item, i) => {
      return <option value={i} key={i}>{item}</option>
    });

    return (
        <div className="app">
          <select
              onChange={ (e) => this.updateValue(e) }
              value={currentValue}
          >
            {optionsList}
          </select>
          <p>{texts[currentValue]}</p>
        </div>
    );
  }
}

export default Task_h_6_4;
