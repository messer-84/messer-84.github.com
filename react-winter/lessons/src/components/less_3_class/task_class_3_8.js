import React, {Component} from 'react';

class Task_c_3_8 extends Component {
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

  render() {
    const list = this.state.hrefs.map((item, i) => {
      return <li key={i}><a href={item.href}>{item.text}</a></li>;
    });
    return (
        <div>
          <ul>
            {list}
          </ul>
        </div>
    );
  }
}

export default Task_c_3_8;
