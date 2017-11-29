import React, {Component} from 'react';


/*
*
*Даны два селекта. С помощью первого селекта можно выбрать язык пользователя (русский или английский). Если в первом селекте выбран русский язык, то во втором селекте должен появится список дней недели по-русски. А если в первом селекте выбран английский - то и во втором дни недели будут по-английски.
*
*
*
* */

class Task_h_7_8 extends Component {
  constructor() {
    super();
    this.state = {
      language: ['eng', 'rus'],
      enDays: ['Mon ', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      rusDays: ['Пн', 'Вт ', 'Ср ', 'Чт ', 'Пт', 'Сб', 'Вс'],
      selectedLang: 0,
      selectedDay: 0,
    };
  }


  updateLangValue = (e) => {
    this.setState({
      selectedLang: parseInt(e.target.value)
    })
  };

  updateDayValue = (e) => {
    this.setState({
      selectedDay: parseInt(e.target.value)
    })
  };

  render() {
    const {
        language,
        selectedLang,
        selectedDay,
        enDays,
        rusDays
    } = this.state;
    const langList = language.map((item, i) => {
      return (
          <option value={i} key={i}>
            {item}
          </option>
      );
    });

    const dayArray = selectedLang === 0 ? enDays : rusDays;
    const dayList = dayArray.map((item, i) => {
      return (
          <option value={i} key={i}>
            {item}
          </option>
      );
    });

    return (
        <div className="app">

          <select value={selectedLang}
              onChange={(e) => this.updateLangValue(e) }
          >
            {langList}
          </select>
          <select value={selectedDay}
              onChange={ (e) => this.updateDayValue(e) }
          >
            {dayList}
          </select>

        </div>
    );
  }
}

export default Task_h_7_8;
