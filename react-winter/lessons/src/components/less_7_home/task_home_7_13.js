import React, {Component} from 'react';

/*
 Реализуйте калькулятор валют. Как он работает: дан инпут,
 в который вводится сумма и даны два селекта -
 в первом выбирается из какой валюты, а во втором - в какую.
 Дана также кнопка. По нажатию на эту кнопку в абзац должна
 вывестись сумма в выбранной валюте.
 * */

class Task_h_7_13 extends Component {
  constructor() {
    super();
    this.state = {
      currency: ['гривна', 'рубль', 'доллар'],
      fromCurrency: 0,
      toCurrency: 1,
      sum: 0,
      inputValue: '',
    };
  }

  updateValue = (e) => {
    this.setState({
      inputValue: parseInt(e.target.value)
    });

  };
  updateFromCurrency = (e) => {
    const newValue = parseInt(e.target.value);
    this.setState({
      fromCurrency: newValue
    });
  };
  updateToCurrency = (e) => {
    const newValue = parseInt(e.target.value);
    this.setState({
      toCurrency: newValue
    });
  };
  getSum = (e) => {
    e.preventDefault();
    const {currency, fromCurrency, toCurrency, inputValue} = this.state;
    const startCurrency = currency[fromCurrency];
    const endCurrency = currency[toCurrency];
    let ratio;

    if (startCurrency === 'гривна' && endCurrency === 'доллар') {
      ratio = 0.037;
    }
    if (startCurrency === 'доллар' && endCurrency === 'гривна') {
      ratio = 27;
    }
    if (startCurrency === 'гривна' && endCurrency === 'рубль') {
      ratio = 4;
    }
    if (startCurrency === 'рубль' && endCurrency === 'гривна') {
      ratio = 0.25;
    }
    if (startCurrency === 'доллар' && endCurrency === 'рубль') {
      ratio = 70;
    }
    if (startCurrency === 'рубль' && endCurrency === 'доллар') {
      ratio = 0.014;
    }
    if (startCurrency === endCurrency) {
      ratio = 1;
    }

    this.setState({
      sum: Math.round(ratio * inputValue)
    });

  };

  render() {
    const {currency, fromCurrency, toCurrency, inputValue, sum} = this.state;
    const currencyList = currency.map((item, index) => {
      return <option key={index} value={index}>{item}</option>
    });

    return (
        <div className="app">
          <h1>Task home-7-13</h1>
          <form action="#" onSubmit={e => this.getSum(e)}>
            <h3>Сумма:</h3>
            <input type="text" value={inputValue} onChange={e => {
              this.updateValue(e)
            }}
            />
            <div>
              <h3>Из какой валюты:</h3>
              <select value={fromCurrency} onChange={e => this.updateFromCurrency(e)}>
                {currencyList}
              </select>
            </div>
            <div>
              <h3>В какую валюту:</h3>
              <select value={toCurrency} onChange={e => this.updateToCurrency(e)}>
                {currencyList}
              </select>
            </div>
            <br />
            <button>Submit</button>
            <h3>Итого: {sum}</h3>
          </form>
        </div>
    );
  }
}

export default Task_h_7_13;
