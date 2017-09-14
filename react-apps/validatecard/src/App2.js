import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    card: {
      number: '',
      cvv: '',
      date: '',
    },

    formErrors: {
      number: '',
      cvv: '',
      date: '',
    },
    numberValid: false,
    cvvValid: false,
    dateValid: false,
    formValid: false,
    messageValid: '',
    cssClassValid: '',
  };
  cardData = {
    number: 5460979700001111,
    cvv: 911,
    date: '01-09-2017',
  };

  createMessageErrors(errors) {
    let message = '';
    for (let error in errors) {
      if (errors[error]) {
        message += error + errors[error];
      }
    }
    return (message = message ? message : 'Good, thanks!');
  }
  createCSSClass(formValid) {
    return formValid ? 'good' : 'bad';
  }
  checkFields(e) {
    let count;
    if (e.target.name === 'cvv') {
      count = 3;
    }
    if (e.target.name === 'number') {
      count = 16;
    }
    e.target.value = e.target.value.slice(0, count);
    e.target.value = e.target.value.replace(/\D/g, '');
  }

  validate = e => {
    e.preventDefault();
    const formElements = this.refs;
    let {
      numberValid,
      cvvValid,
      dateValid,
      formErrors,
      formValid,
    } = this.state;
    const { number, cvv, date } = this.cardData;
    const convertData = formElements.date.value.split('-').reverse().join('-');

    for (const field in formElements) {
      let fieldValue = formElements[field].value;
      if (field === 'number') {
        numberValid = parseInt(fieldValue) === number;
        formErrors.number = numberValid ? '' : ' is invalid ';
      }
      if (field === 'cvv') {
        cvvValid = parseInt(fieldValue) === cvv;
        formErrors.cvv = cvvValid ? '' : ' is invalid ';
      }
      if (field === 'date') {
        const convertData = fieldValue.split('-').reverse().join('-');
        dateValid = convertData === date;
        formErrors.date = dateValid ? '' : ' is invalid ';
      }
    }
    formValid = numberValid && cvvValid && dateValid;

    this.setState({
      card: {
        number: parseInt(formElements.number.value),
        cvv: parseInt(formElements.cvv.value),
        date: convertData,
      },
      formErrors,
      numberValid,
      cvvValid,
      dateValid,
      formValid,
      messageValid: this.createMessageErrors(formErrors),
      cssClassValid: this.createCSSClass(formValid),
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <h1>Validate Card</h1>
          <div id="msg" className={`title ${this.state.cssClassValid}`}>
            {this.state.messageValid}
          </div>
          <form action="/" onSubmit={this.validate}>
            <ul className="list">
              <li className="item">
                <label htmlFor="number">Card number</label>
                <input
                  type="text"
                  id="number"
                  ref="number"
                  name="number"
                  defaultValue={5460979700001111}
                  onChange={this.checkFields.bind(this)}
                />
              </li>
              <li className="itemWrap">
                <div className="item">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" ref="date" name="date" />
                </div>
                <div className="item">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    ref="cvv"
                    name="cvv"
                    defaultValue={911}
                    onChange={this.checkFields.bind(this)}
                  />
                </div>
              </li>

              <li>
                <button className="btn">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
