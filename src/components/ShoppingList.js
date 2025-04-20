import React from 'react';
import Item from './Item';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || [],
      filter: ''
    };
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredItems = () => {
    const { items, filter } = this.state;
    return filter 
      ? items.filter(item => item.category === filter)
      : items;
  };

  render() {
    const categories = [...new Set(this.state.items.map(item => item.category))];
    
    return (
      <div>
        <select
          value={this.state.filter}
          onChange={this.handleFilterChange}
          data-testid="category-filter"
        >
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <ul className="Items">
          {this.getFilteredItems().map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;