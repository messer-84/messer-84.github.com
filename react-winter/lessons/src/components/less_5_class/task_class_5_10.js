import React, {Component} from 'react';

class Task_c_5_10 extends Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
      inputValue: ''
    }
  }

  addElement = (e) => {
    e.preventDefault();
    let names = [...this.state.names];
    names.push(this.state.inputValue);

    this.setState({
      names
    });
  };
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  render() {
    const list = this.state.names.map((item, i) => {
      return <li key={i}>{item}</li>
    });

    return (
        <div>
          <ul>
            {list}
          </ul>
          <form action="#" onSubmit={this.addElement}>
            <input
                type="text"
                onChange={(e) => this.handleChange(e)}
            />
            <input type="submit" />
          </form>

        </div>
    );
  }
}

export default Task_c_5_10;
