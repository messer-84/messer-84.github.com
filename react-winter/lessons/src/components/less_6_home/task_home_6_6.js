import React, {Component} from 'react';

class Task_h_6_6 extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
  }

  updateValue(e) {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    const {isChecked} = this.state;

    return (
        <div className="app">
          <input type="text" disabled={!isChecked} />
          <input
              type="checkbox"
              checked={isChecked}
              onChange={e => this.updateValue(e)}
          />
        </div>
    );
  }
}

export default Task_h_6_6;
