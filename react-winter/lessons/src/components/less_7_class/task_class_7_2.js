import React, {Component} from 'react';


/*
 *
 *
 *  Дан массив. Выведите каждый элемент этого массива в отдельном абзаце.
 *  Сделайте так, чтобы над каждым абзацем был чекбокс, со следующим
 *  поведением: если он отмечен - абзац под ним есть на экране,
 *  а если не отмечен - абзаца нет. По умолчанию пусть все чекбоксы отмечены.
 *
 *
 * */
class Task_c_7_2 extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {text: 'lorem ipsum dolor sit amet', checked: true},
        {text: 'lorem ipsum dolor sit amet', checked: true},
        {text: 'lorem ipsum dolor sit amet', checked: true},
        {text: 'lorem ipsum dolor sit amet', checked: true},
      ],
    };
  }

  updateValue = (index) => {
    const items = [...this.state.items];
    items[index].checked = !items[index].checked;

    this.setState({
      items
    });
  };

  render() {
    const {items} = this.state;
    const list = items.map((item, index) => {
      return (
          <div key={index}>
            <input
                type="checkbox"
                defaultChecked={item.checked}
                onChange={() => this.updateValue(index)}
            />
            <p
                className={item.checked ? '' : 'disable'}>
              {item.text}
            </p>
          </div>
      );
    });
    return (
        <div className="app">
          {list}
        </div>
    );
  }
}

export default Task_c_7_2;
