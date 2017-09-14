import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    card: {
      number: '',
      cvv: '',
      date: '',
    },
    formErrors: {
      numberError: '',
      cvvError: '',
      dateError: '',
    },
    numberValid: false,
    cvvValid: false,
    dateValid: false,
    formValid: false,
    messageValid: '',
    cssClassValid: '',
  };
  cardData = {
    testNumber: 5460979700001111,
    testCVV: 911,
    testDate: '14-09-2017',
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
    let newState = {
      card: {
        number: '',
        cvv: '',
        date: '',
      },
      formErrors: {
        numberError: '',
        cvvError: '',
        dateError: '',
      },
      cvvValid: '',
      dateValid: 'f',
      formValid: '',
      messageValid: '',
      cssClassValid: '',
    };

    let {
      card: { number, cvv, date },
      formErrors: { numberError, cvvError, dateError },
      numberValid,
      cvvValid,
      dateValid,
      formValid,
      messageValid,
      cssClassValid,
    } = newState;
    const { testNumber, testCVV, testDate } = this.cardData;
    const convertData = formElements.date.value.split('-').reverse().join('-');

    for (const field in formElements) {
      let fieldValue = formElements[field].value;
      if (field === 'number') {
        numberValid = parseInt(fieldValue) === testNumber;
        numberError = numberValid ? '' : ' is invalid ';
        console.log(numberValid, numberError);

      }
      if (field === 'cvv') {
        cvvValid = parseInt(fieldValue) === testCVV;
        cvvError = cvvValid ? '' : ' is invalid ';
      }
      if (field === 'date') {
        dateValid = convertData === testDate;
        dateError = dateValid ? '' : ' is invalid ';
      }
    }
    formValid = numberValid && cvvValid && dateValid;
    number = parseInt(formElements.number.value);
    cvv = parseInt(formElements.cvv.value);
    date = convertData;
    messageValid = this.createMessageErrors(dateError);
    cssClassValid = this.createCSSClass(formValid);
    this.setState(newState);
    console.log(newState);

    // console.log(this.setState(newState));

    // console.log('state', this.state);
    // console.log('new', formValid);
    // console.log(this.createCSSClass(formValid));
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
                  onChange={this.checkFields}
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
                    onChange={this.checkFields}
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
