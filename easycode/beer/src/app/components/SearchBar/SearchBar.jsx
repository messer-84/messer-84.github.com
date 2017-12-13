import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../../../node_modules/reactbulma';
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state.title;
    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
  }

  render() {
    return (
      <form className="level search-bar" onSubmit={this.handleSubmit}>
        <div className="level-item has-text-centered search-bar__inner">
          <div className="field has-addons search-bar__group">
            <div className="control search__block search__block--input">
              <Input
                type="text"
                value={this.state.title}
                placeholder="Find a Beer"
                onChange={this.handleChange}
              />
            </div>
            <div className="control search__block">
              <Button info>
                Search
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default SearchBar;

