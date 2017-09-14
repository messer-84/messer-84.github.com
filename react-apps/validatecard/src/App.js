import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    card: {
      number: '5460979700001111',
      cvv: '911',
      date: '2017-09-14',
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
  // card for check
  cardData = {
    testNumber: 5460979700001111,
    testCVV: 911,
    testDate: '2017-09-14',
  };
  //creating string messages with list errors or 'good' for show on site
  createMessageErrors(errors) {
    let message = '';
    for (let error in errors) {
      if (errors[error]) {
        message += error + errors[error];
      }
    }
    return (message = message ? message : 'Good, thanks!');
  }

  // creating css class for messages GOOD or Error
  createCSSClassForTitle = formValid => formValid ? 'good' : 'bad';

  checkFields = e => {
    const fieldName = e.target.name;
    let sizeLimit, newValue;
    if (fieldName !== 'date') {
      if (fieldName === 'cvv') {
        sizeLimit = 3;
      }
      if (fieldName === 'number') {
        sizeLimit = 16;
      }
      newValue = e.target.value.slice(0, sizeLimit);
      newValue = newValue.replace(/\D/g, '');
    } else {
      newValue = e.target.value;
    }

    this.setState({
      card: {
        [fieldName]: newValue || '',
      },
    });
  };

  validateForm = e => {
    e.preventDefault();
    const formElements = this.refs;
    let newState = {};
    newState.formErrors = {};
    newState.card = {};
    const { testNumber, testCVV, testDate } = this.cardData;

    for (const field in formElements) {
      let fieldValue = formElements[field].value;
      if (field === 'number') {
        newState.numberValid = parseInt(fieldValue) === testNumber;
        newState.formErrors.number = newState.numberValid ? '' : ' is invalid ';
      }
      if (field === 'cvv') {
        newState.cvvValid = parseInt(fieldValue) === testCVV;
        newState.formErrors.cvv = newState.cvvValid ? '' : ' is invalid ';
      }
      if (field === 'date') {
        newState.dateValid = fieldValue === testDate;
        newState.formErrors.date = newState.dateValid ? '' : ' is invalid ';
      }
    }
    newState.formValid =
      newState.numberValid && newState.cvvValid && newState.dateValid;
    newState.card.number = parseInt(formElements.number.value) || '';
    newState.card.cvv = parseInt(formElements.cvv.value) || '';
    newState.card.date = formElements.date.value;
    newState.messageValid = this.createMessageErrors(newState.formErrors);
    newState.cssClassValid = this.createCSSClassForTitle(newState.formValid);

    this.setState(newState);
  };
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <h1>Validate Card</h1>
          <div id="msg" className={`title ${this.state.cssClassValid}`}>
            {this.state.messageValid}
          </div>
          <form action="/" onSubmit={this.validateForm}>
            <ul className="list">
              <li className="item">
                <label htmlFor="number">Card number</label>
                <input
                  type="text"
                  id="number"
                  ref="number"
                  name="number"
                  onChange={this.checkFields}
                  value={this.state.card.number}
                />
              </li>
              <li className="itemWrap">
                <div className="item">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    ref="date"
                    name="date"
                    value={this.state.card.date}
                    onChange={this.checkFields}
                  />
                </div>
                <div className="item">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    ref="cvv"
                    name="cvv"
                    onChange={this.checkFields}
                    value={this.state.card.cvv}
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
