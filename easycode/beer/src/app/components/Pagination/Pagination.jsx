import React from 'react';
import PropTypes from 'prop-types';
import { NavLink  } from 'react-router-dom';
import '../Pagination/Pagination.scss';

class Pagination extends React.Component {
  getArrLinks(number) {
    const arr = [];
    for (let i = 1; i <= number; i += 1) {
      arr.push(i);
    }
    return arr;
  }

  getLinks(totalItems) {
    return Math.ceil(totalItems / this.props.numberItemsShow);
  }

  render() {
    // linksOnPage - сколько всего страниц
    const linksOnPage = this.getLinks(this.props.totalItems);

    // allLinks - массив нужной длинны с номерами страниц
    const allLinks = this.getArrLinks(linksOnPage);

    return (
      <div className="pagin">
        <ul className="pagin__List">
          {
            allLinks.map((item, index) => (
              <li key={index} className="pagin__item">
                <a activeClassName="pagin__item--active"
                   key={index}
                   href="#"
                   className="pagin__link"
                   onClick={() => this.props.onLinkClick(index + 1)}
                >{item}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  numberItemsShow: PropTypes.number.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Pagination;

