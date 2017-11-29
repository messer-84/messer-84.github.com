import React, {Component} from 'react';

/*
 Дан массив с туристическими маршрутами.
 Выведите эти маршруты на экран так, чтобы рядом с
 каждым стояла радио-кнопочка. Пользователь может выбрать один из маршрутов.
 Его выбор должен отобразиться на экране в абзаце.
 * */

class Task_h_7_5 extends Component {
  constructor() {
    super();
    this.state = {
      paths: [
        {path: 'Ужгород-Киев-Харьков'},
        {path: 'Львов-Киев-Днепр'},
        {path: 'Сумы-Запорожье-Херсон'},
      ],
      selectedPathIndex: 0
    };
  }


  updateValue = (index) => {
    this.setState({
      selectedPathIndex: index
    });

  };

  render() {
    const {paths, selectedPathIndex} = this.state;
    const list = paths.map((item, index) => {
      return (
          <div key={index}>
            <input
                type="radio"
                id={index}
                name="path"
                value={item.path}
                checked={selectedPathIndex === index}
                onChange={() => this.updateValue(index)}
            />
            <label htmlFor={index}>
              {item.path}
            </label>
          </div>
      );
    });

    return (
        <div className="app">
          <h1>Task home-7-5</h1>
          {list}
          <p>Выбранный маршрут: {paths[selectedPathIndex].path}</p>
        </div>
    );
  }
}

export default Task_h_7_5;
