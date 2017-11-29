import React, {Component} from 'react';

class Task_h_2_6 extends Component {
  constructor() {
    super();
    this.state = {
      color: 'green'
    };
  }

  setColor = () => {
    this.setState({
      color: 'red'
    });
  };

  render() {
    return (
        <div>
          <div style={{width: "300px", height: "300px", border: "15px solid " + this.state.color}}></div>
          <button onClick={this.setColor}>Set new color</button>
        </div>
    );
  }
}

export default Task_h_2_6;
