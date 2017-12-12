import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch} from 'react-router-dom';
import './List.scss';
import Item from '../Item/Item';

const List = (props) => (
  <Switch>
    <Route exact path="/">
      <ul className="list">
        {
            props.data.map(elem => (
              <Item
                key={elem.id}
                src={elem.image_url}
                name={elem.name}
                time={elem.first_brewed}
                desc={elem.description}
                rating={elem.attenuation_level}
              />
            ))
          }
      </ul>
    </Route>
  </Switch>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
