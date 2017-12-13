import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Navigation/Navigation';
import './/header.scss';
import { Level } from '../../../../node_modules/reactbulma';

const Header = props => (
  <header className="header">
    <div className="container level">
      <Level.Left>
        <h1 className="title is-1 header__title">{props.title}</h1>
      </Level.Left>
      <Level.Right>
        <Nav />
      </Level.Right>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Beans Love Beers',
};


export default Header;

