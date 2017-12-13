import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

function Item(props) {
  return (
    <li className="item">
      <div className="item__left">
        <div className="item__image">
          <img src={props.src} alt="Картинка" />
        </div>
      </div>
      <div className="item__right">
        <h2 className="item__title">{props.name}</h2>
        <p className="item__data">First brewed: {props.time}</p>
        <p className="item__desc">{props.desc}</p>
        <div className="item__volume">Raging: {props.rating}</div>
      </div>
    </li>
  );
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Item;
