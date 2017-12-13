import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import List from '../List/List';


class RouterList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <List data={data} />
      </div>
    )
  }
}

export default RouterList;
