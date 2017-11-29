import React, {Component} from 'react';

class Task_c_5_12 extends Component {
  constructor() {
    super();
    this.state = {
      hrefs: [
        {href: '1.html', text: 'ссылка 1'},
        {href: '2.html', text: 'ссылка 2'},
        {href: '3.html', text: 'ссылка 3'},
      ]
    }
  }

  addLink = (e) => {
    e.preventDefault();
    const hrefs = [...this.state.hrefs];

    hrefs.push({
      href: this.href.value,
      text: this.text.value
    });
    this.text.value = '';
    this.href.value = '';

    this.setState({
      hrefs
    });
  };

  render() {
    const list = this.state.hrefs.map((item, i) => {
      return (
          <li key={i}>
            <a href={item.href}>{item.text}</a>
          </li>
      );
    });

    return (
        <div>
          <ul>
            {list}
          </ul>
          <form onSubmit={(e) => this.addLink(e)}>
            <div>
              For text:
              <input
                  type="text"
                  ref={el => this.text = el} />
            </div>
            <div>
              For href:
              <input
                  type="text"
                  ref={el => this.href = el}
              />
            </div>
            <input type="submit" />
          </form>
        </div>
    );
  }

}

export default Task_c_5_12;
