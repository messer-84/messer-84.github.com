import React, {Component} from 'react';


/*
 *
 *
 *
 *
 * */

class Task_c_9_1 extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'Vasya'
      }
    };
  }

  updateValue = (e) => {

    const user = {...this.state.user, name: e.target.value};

    this.setState({user});

  };

  render() {
    // console.log({...this.state.user});

    const {name} = this.state.user;
    return (
        <div className="app">
          <p>{name}</p>
          <p>
            <label htmlFor="check">Изменить имя</label>
            <input type="text" value={name} onChange={e => this.updateValue(e)} />
          </p>
        </div>
    );
  }
}

export default Task_c_9_1;
