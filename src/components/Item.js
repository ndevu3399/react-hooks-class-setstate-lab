// src/components/Item.js
import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      inCart: !prevState.inCart
    }));
  };

  render() {
    // Destructure props directly instead of using an item object
    const { name, category } = this.props;
    return (
      <li className={this.state.inCart ? 'in-cart' : ''}>
        <span>{name}</span>
        <button onClick={this.handleToggle}>
          {this.state.inCart ? 'Remove From Cart' : 'Add to Cart'}
        </button>
      </li>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Item;