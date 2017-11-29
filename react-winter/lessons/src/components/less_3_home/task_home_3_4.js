import React, {Component} from 'react';

class Task_h_3_4 extends Component {
  constructor() {
    super();
    this.state = {
      isRed: true,
    }
  }

  toggleColor = () => {
    this.setState({
      isRed: !this.state.isRed
    })
  };

  render() {
    const style = {
      "color": this.state.isRed ? 'red' : 'green'
    };
    return (
        <div>
          <button onClick={this.toggleColor}>{this.state.isRed ? 'Зеленый' : 'Красный'}</button>
          <p style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
    );
  }
}

export default Task_h_3_4;
