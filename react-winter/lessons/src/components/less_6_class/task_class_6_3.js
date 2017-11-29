import React, {Component} from 'react';

class Task_c_6_3 extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    }
  }

  updateValue = () => {
    this.setState({
      checked: !this.state.checked
    })

  };

  render() {
    const text = 'Lorem ipsum dolor sit amet';
    return (
        <div className="app">
          <input type="checkbox"
              checked={this.state.checked}
              onChange={this.updateValue}
          />
          <p>{this.state.checked ? text : ''}</p>
        </div>
    );
  }
}

export default Task_c_6_3;
