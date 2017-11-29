import React, {Component} from 'react';

class Task_h_3_1 extends Component {
  constructor() {
    super();
    this.state = {
      show: false,

    }
  }

  showText = () => {
    this.setState({
      show: true
    })
  };
  hideText = () => {
    this.setState({
      show: false
    })
  };

  render() {
    if (this.state.show) {
      var text = <p>Lorem ipsum dolor sit amet, consectetur.</p>
    }
    return (
        <div>
          <button onClick={this.showText}>Show</button>
          <button onClick={this.hideText}>Hide</button>
          {text}
        </div>
    );
  }
}

export default Task_h_3_1;
