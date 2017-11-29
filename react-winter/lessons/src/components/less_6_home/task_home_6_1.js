import React, {Component} from 'react';

class Task_h_6_1 extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      value: '',
    };
  }

  updateValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  updateCheckbox = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const {
        value, checked
    } = this.state;
    const textPartOne = value ? value : '';
    const textPartTwo = checked ? 'Привет, ' : 'Пока, ';
    return (
        <div className="app">
          <input
              type="text"
              value={value}
              onChange={e => this.updateValue(e)}
          />
          <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={this.updateCheckbox}
            />
          </div>

          <p>
            {value ? textPartTwo + textPartOne : ''}
          </p>
        </div>
    );
  }
}

export default Task_h_6_1;
