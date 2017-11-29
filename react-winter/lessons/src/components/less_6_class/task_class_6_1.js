import React, {Component} from 'react';

class Task_c_6_1 extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  updateValue = (e) => {
    this.setState({
      value: e.target.value
    })

  };

  render() {
    return (
        <div className="app">
					<textarea
              value={this.state.value}
              onChange={(e) => this.updateValue(e)}
          />
          <p>{this.state.value}</p>
        </div>
    );
  }
}

export default Task_c_6_1;
