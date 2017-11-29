import React, {Component} from 'react';

class Task_h_6_3 extends Component {
  constructor() {
    super();
    this.state = {
      texts: [],
      value: '',
    };
  }

  addText = e => {
    e.preventDefault();
    const texts = [...this.state.texts];
    texts.push(this.text.value);
    this.state.value = '';

    this.setState({
      texts,
    });
  };

  updateValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const {texts, value} = this.state;
    const content = texts.map((item, i) => {
      return (
          <p key={i}>
            {item}
          </p>
      );
    });
    return (
        <div className="app">
          <form action="#" onSubmit={e => this.addText(e)}>
          <textarea
              ref={el => (this.text = el)}
              value={value}
              onChange={e => this.updateValue(e)}
          />
            <div>
              <button>Отправить</button>
            </div>
          </form>
          <div>
            {content}
          </div>
        </div>
    );
  }
}

export default Task_h_6_3;
