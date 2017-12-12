import React from 'react';
import { NavLink  } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="level nav">
    <li className="level-item nav__item">
      <NavLink exact to="/" activeClassName="nav__link--active" className="link nav__link">Home</NavLink>
    </li>
    <li className="level-item nav__item">
      <NavLink to="favorite" activeClassName="nav__link--active" className="link nav__link">Favorites</NavLink>
    </li>
    <li className="level-item nav__item">
      <NavLink to="about" activeClassName="nav__link--active" className="link nav__link">About</NavLink>
    </li>
  </nav>
);

export default Navigation;

